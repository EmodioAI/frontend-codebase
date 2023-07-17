import { useEffect, useState } from "react";
import styles from "./screen_three.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
    BeamingFaceWithSmilingEyes,
    AngryFace,
    FearfulFace,
    NeutralFace,
    RelievedFace,
    FaceVomiting,
    SadButRelievedFace,
    FaceWithOpenMouth,
} from "fluent-emoji";
import { ScreenThreeProps } from "./screen_three.props";
import { useQuery } from "@tanstack/react-query";
import { ParagraphData, getEmotion } from "../../utils/apis";
import {
    setAnalysisResults,
    setNotificationDetails,
    setnewContentState,
} from "../../store/actions";
import LoadingAnimation from "../../general_components/loading_animation/loading_animation";
import { AxiosError } from "axios";
import { MdSignalWifiConnectedNoInternet0 } from "react-icons/md";

function ScreenThree(props: ScreenThreeProps) {
    const dispatch = useDispatch();

    const fileContent = useSelector((state: RootState) => state.text_content);
    const isNewContent = useSelector((state: RootState) => state.isNewContent);
    const analysisResults = useSelector(
        (state: RootState) => state.analysis_results
    );
    const [contents] = useState<string[]>(fileContent);

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
        calm: "var(--Calm_Colour)",
        surprised: "var(--Surprised_Colour)",
    };

    useEffect(() => {
        if (!isFetching && isNewContent) {
            if (data) {
                dispatch(setAnalysisResults(data));
                dispatch(setnewContentState(false));
            }
        }
        if (!isFetching) {
            props.changeButton("enabled");
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
            props.changeButton("enabled");

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

    return (
        <>
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
                                <div className={styles.tooltip}>Calm</div>
                                <span>
                                    <RelievedFace />
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

                        <div className={styles.textBox}>
                            {contents.map(
                                (paragraph: string, index: number) => {
                                    return (
                                        <div
                                            className={styles.paragraph}
                                            style={{
                                                backgroundColor:
                                                    emotioncolourMap[
                                                        analysisResults[index]
                                                    ],
                                            }}
                                            key={index}
                                        >
                                            {paragraph}
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </>
                )}
            </section>
        </>
    );
}

export default ScreenThree;
