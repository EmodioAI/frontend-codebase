import { useEffect, useRef, useState } from "react";
import styles from "./screen_three.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
    BeamingFaceWithSmilingEyes,
    AngryFace,
    FearfulFace,
    NeutralFace,
    FaceVomiting,
    SadButRelievedFace,
    FaceWithOpenMouth,
} from "fluent-emoji";
import { EmotionData, ScreenThreeProps } from "./screen_three.props";
import { useQuery } from "@tanstack/react-query";
import { ParagraphData, getEmotion } from "../../utils/apis";
import {
    setAnalysisResults,
    setNotificationDetails,
    setPageStep,
    setNewAnalysisContentState,
    setToken,
} from "../../store/actions";
import LoadingAnimation from "../../general_components/loading_animation/loading_animation";
import { AxiosError } from "axios";
import { MdSignalWifiConnectedNoInternet0 } from "react-icons/md";
import { GrBarChart } from "react-icons/gr";
import Plot from "../../general_components/plot/plot";

function ScreenThree(props: ScreenThreeProps) {
    const dispatch = useDispatch();

    const fileContent = useSelector((state: RootState) => state.text_content);
    const isNewContent = useSelector(
        (state: RootState) => state.isNewAnalysisContent
    );
    const analysisResults:EmotionData[] = useSelector(
        (state: RootState) => state.analysis_results
    );
    const [contents] = useState<string[]>(fileContent);
    const [showPlot, setShowPlot] = useState<boolean>(false);
    const [analysisIndex, setAnalysisIndex] = useState<number>(0);

    const chartsRef = useRef<HTMLDivElement>(null);
    const textBoxRef = useRef<HTMLDivElement>(null);

    const inputData: ParagraphData = {
        paragraphs: contents,
    };

    const { data, isFetching, isError, error } = useQuery({
        queryKey: ["analysis"],
        enabled: isNewContent,
        queryFn: () => getEmotion(inputData),
    });

    const emotioncolourMap: { [key: string]: string } = {
        happy: "var(--Happy_Colour)",
        sad: "var(--Sad_Colour)",
        anger: "var(--Anger_Colour)",
        fearful: "var(--Fear_Colour)",
        disgust: "var(--Disgust_Colour)",
        neutral: "var(--Neutral_Colour)",
        surprised: "var(--Surprised_Colour)",
    };

    useEffect(() => {
        //check if text content is empty
        if (contents.length === 0) {
            dispatch(
                setNotificationDetails({
                    status: true,
                    message: "No content to analyse",
                    state: "error",
                })
            );
            dispatch(setNewAnalysisContentState(false));
            dispatch(setPageStep(1));
        }
    }, []);

    useEffect(() => {
        if (!isFetching && isNewContent) {
            if (data) {
                console.log(data)
                dispatch(setAnalysisResults(data.emotions));
                dispatch(setToken(data.token));
                dispatch(setNewAnalysisContentState(false));
                props.changeButton("enabled");
            }
        }
        if (!isFetching) {
            props.changeButton("enabled");
        } else {
            props.changeButton("disabled");
        }
    }, [data, error, isFetching, isError, isNewContent]);

    if (isError) {
        if (
            error instanceof Error &&
            (error as AxiosError).code === "ERR_NETWORK"
        ) {
            dispatch(
                setNotificationDetails({
                    status: true,
                    message: "No internet connection, try again.",
                    state: "error",
                })
            );
            props.changeButton("disabled");
            dispatch(setNewAnalysisContentState(false));

            return (
                <div className={styles.error}>
                    <i>
                        <MdSignalWifiConnectedNoInternet0 />
                    </i>
                    <p>No connection</p>
                </div>
            );
        }
    }

    function handlePlots(index: number) {
        setShowPlot(true);
        setAnalysisIndex(index);
    }

    return (
        <>
            {showPlot && (
                <Plot setShowPlot={setShowPlot} analysisIndex={analysisIndex} />
            )}
            <section className={styles.container} data-testid="screen-three">
                {isFetching ? (
                    <LoadingAnimation />
                ) : (
                    <>
                        <div className={styles.wrapper}>
                            <div className={styles.icon}>
                                <div className={styles.tooltip}>Happy</div>
                                <span>
                                    <BeamingFaceWithSmilingEyes />
                                </span>
                            </div>
                            <div className={styles.icon}>
                                <div className={styles.tooltip}>Anger</div>
                                <span>
                                    <AngryFace />
                                </span>
                            </div>
                            <div className={styles.icon}>
                                <div className={styles.tooltip}>Fear</div>
                                <span>
                                    <FearfulFace />
                                </span>
                            </div>

                            <div className={styles.icon}>
                                <div className={styles.tooltip}>Sad</div>
                                <span>
                                    <SadButRelievedFace />
                                </span>
                            </div>

                            <div className={styles.icon}>
                                <div className={styles.tooltip}>Disgust</div>
                                <span>
                                    <FaceVomiting />
                                </span>
                            </div>
                            <div className={styles.icon}>
                                <div className={styles.tooltip}>Neutral</div>
                                <span>
                                    <NeutralFace />
                                </span>
                            </div>
                            <div className={styles.icon}>
                                <div className={styles.tooltip}>Surprised</div>
                                <span>
                                    <FaceWithOpenMouth />
                                </span>
                            </div>
                        </div>

                        <div className={styles.text_wrapper}>
                            <div className={styles.textBox} ref={textBoxRef}>
                                {contents.map(
                                    (paragraph: string, index: number) => {
                                        return (
                                            <>
                                                <div
                                                    className={styles.paragraph}
                                                    style={{
                                                        backgroundColor:
                                                            emotioncolourMap[
                                                                analysisResults?.[
                                                                    index
                                                                ]?.emotion
                                                            ] || "white",
                                                    }}
                                                    key={index}
                                                >
                                                    {paragraph}
                                                </div>
                                                <div
                                                    className={styles.charts}
                                                    ref={chartsRef}
                                                >
                                                    <p
                                                        onClick={() =>
                                                            handlePlots(index)
                                                        }
                                                    >
                                                        <GrBarChart />
                                                    </p>
                                                </div>
                                            </>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </>
                )}
            </section>
        </>
    );
}

export default ScreenThree;
