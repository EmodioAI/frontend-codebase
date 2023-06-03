import { useEffect, useState } from "react";
import styles from "./screen_three.module.css";
import { Item, ScreenThreeProps } from "./screen_three.props";

function ScreenThree(props: ScreenThreeProps) {
    const colors = [
        "#F7AEF8",
        "#B388EB",
        "#D8E2DC",
        "#72DDF7",
        "#8AEA92",
        "#F6D0B1",
        "#DBF4A7",
        "#BE92A2",
    ];

    const [emotionColors, setEmotionColors] = useState<Item[]>([]);

    useEffect(() => {
        const tempColors: string[] = [...colors];
        const emotions: string[] = [
            "happy",
            "sad",
            "disgust",
            "anger",
            "fear",
            "calm",
            "neutral",
            "surprise",
        ];
        const randomizedColors: Item[] = [];

        for (let i = 0; i < 8; i++) {
            const randomIndex = Math.floor(Math.random() * tempColors.length);
            const randomColor = tempColors[randomIndex];
            randomizedColors.push({ name: emotions[i], color: randomColor });
            tempColors.splice(randomIndex, 1); // Remove the selected color to avoid duplicates
        }

        setEmotionColors(randomizedColors);
        props.changeButton("enabled");
    }, []);

    function getColorByName(
        name: string,
        emotionColors: Item[]
    ): string | undefined {
        const colorObject = emotionColors.find(
            (item: Item) => item.name === name
        );
        return colorObject?.color;
    }

    return (
        <>
            <section className={styles.container} data-testid="screen-three">
                <div className={styles.descriptionBox}>
                    <ul>
                        <li
                            style={{
                                backgroundColor: `${getColorByName(
                                    "happy",
                                    emotionColors
                                )}`,
                            }}
                        >
                            Happy
                        </li>
                        <li
                            style={{
                                backgroundColor: `${getColorByName(
                                    "sad",
                                    emotionColors
                                )}`,
                            }}
                        >
                            Sad
                        </li>
                        <li
                            style={{
                                backgroundColor: `${getColorByName(
                                    "calm",
                                    emotionColors
                                )}`,
                            }}
                        >
                            Calm
                        </li>
                        <li
                            style={{
                                backgroundColor: `${getColorByName(
                                    "anger",
                                    emotionColors
                                )}`,
                            }}
                        >
                            Anger
                        </li>
                        <li
                            style={{
                                backgroundColor: `${getColorByName(
                                    "disgust",
                                    emotionColors
                                )}`,
                            }}
                        >
                            Disgust
                        </li>
                        <li
                            style={{
                                backgroundColor: `${getColorByName(
                                    "fear",
                                    emotionColors
                                )}`,
                            }}
                        >
                            Fear
                        </li>
                        <li
                            style={{
                                backgroundColor: `${getColorByName(
                                    "surprise",
                                    emotionColors
                                )}`,
                            }}
                        >
                            Surprise
                        </li>
                        <li
                            style={{
                                backgroundColor: `${getColorByName(
                                    "neutral",
                                    emotionColors
                                )}`,
                            }}
                        >
                            Neutral
                        </li>
                    </ul>
                </div>
                <div className={styles.textBox}>
                    <div
                        className={styles.paragraph}
                        style={{ backgroundColor: "#F7AEF8" }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci quibusdam culpa voluptatem distinctio illum
                        ipsum similique itaque earum iste molestias!
                    </div>
                    <div
                        className={styles.paragraph}
                        style={{ backgroundColor: "#B388EB" }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam sint error porro doloremque, quia harum.
                    </div>
                    <div
                        className={styles.paragraph}
                        style={{ backgroundColor: "#D8E2DC" }}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Perferendis natus laudantium veniam blanditiis,
                        dignissimos quo dicta placeat, id nulla neque in magni!
                        Temporibus, libero! Accusamus, ipsum.{" "}
                    </div>
                    <div
                        className={styles.paragraph}
                        style={{ backgroundColor: "#72DDF7" }}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Perferendis natus laudantium veniam blanditiis,
                        dignissimos quo dicta placeat, id nulla neque in magni!
                        Temporibus, libero! Accusamus, ipsum.{" "}
                    </div>
                    <div
                        className={styles.paragraph}
                        style={{ backgroundColor: "#8AEA92" }}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Perferendis natus laudantium veniam blanditiis,
                        dignissimos quo dicta placeat, id nulla neque in magni!
                        Temporibus, libero! Accusamus, ipsum.{" "}
                    </div>
                    <div
                        className={styles.paragraph}
                        style={{ backgroundColor: "#9BD1E5" }}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Perferendis natus laudantium veniam blanditiis,
                        dignissimos quo dicta placeat, id nulla neque in magni!
                        Temporibus, libero! Accusamus, ipsum.{" "}
                    </div>
                    <div
                        className={styles.paragraph}
                        style={{ backgroundColor: "#DBF4A7" }}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Perferendis natus laudantium veniam blanditiis,
                        dignissimos quo dicta placeat, id nulla neque in magni!
                        Temporibus, libero! Accusamus, ipsum.{" "}
                    </div>
                </div>
            </section>
        </>
    );
}

export default ScreenThree;
