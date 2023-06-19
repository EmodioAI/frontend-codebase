import { useEffect, useState } from "react";
import styles from "./screen_three.module.css";
import { Item, ScreenThreeProps } from "./screen_three.props";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function ScreenThree(props: ScreenThreeProps) {
    const fileContent = useSelector((state: RootState) => state.file_content);

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
    const [contents] = useState<string[]>(fileContent);

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
                    {contents.map((paragraph: string, index: number) => {
                        return (
                            <div
                                className={styles.paragraph}
                                style={{
                                    backgroundColor: `${getColorByName(
                                        "neutral",
                                        emotionColors
                                    )}`,
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
