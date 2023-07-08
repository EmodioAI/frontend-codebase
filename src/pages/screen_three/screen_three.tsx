import { useEffect, useState } from "react";
import styles from "./screen_three.module.css";
import { useSelector } from "react-redux";
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

function ScreenThree(props: ScreenThreeProps) {
    const fileContent = useSelector((state: RootState) => state.text_content);

    const [contents] = useState<string[]>(fileContent);

    useEffect(() => {
        props.changeButton("enabled");
    }, []);

    return (
        <>
            <section className={styles.container} data-testid="screen-three">
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
                    {contents.map((paragraph: string, index: number) => {
                        return (
                            <div
                                className={styles.paragraph}
                                style={{
                                    backgroundColor: "var(--Happy_Colour)",
                                }}
                                key={index}
                            >
                                {paragraph}
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}

export default ScreenThree;
