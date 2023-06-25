import { CSSProperties, useState } from "react";
import styles from "./home.module.css";
import style from "../page_modal/page_modal.module.css";
import group_emotions from "../../assets/Group 6841.png";
import { FiCheckCircle } from "react-icons/fi";

function Home() {
    const [activeItem, setActiveItem] = useState<number>(0);

    const emotions = [
        {
            emotion: "Happy",
            expressions: [
                "Happy mood",
                "Express positive feelings",
                "Good cheer",
                "Friendly gesture",
                "Feeling complimented",
            ],
            color: "#FFC800",
        },
        {
            emotion: "Sad",
            expressions: [
                "Feeling down",
                "Expressing sorrow",
                "Crying",
                "Withdrawing from activities",
                "Lack of energy",
            ],
            color: "#00A5FF",
        },
        {
            emotion: "Anger",
            expressions: [
                "Feeling furious",
                "Irritated",
                "Expressing rage",
                "Raising voice",
                "Tense body language",
            ],
            color: "#5C67A7",
        },
        {
            emotion: "Fear",
            expressions: [
                "Feeling scared",
                "Nervous",
                "Anxious",
                "Avoidance behavior",
                "Increased heart rate",
            ],
            color: "#F0002C",
        },
        {
            emotion: "Disgust",
            expressions: [
                "Feeling repulsed",
                "Showing aversion",
                "Disapproving",
                "Frowning",
                "Avoiding contact",
            ],
            color: "#ACF000",
        },
        {
            emotion: "Surprised",
            expressions: [
                "Feeling astonished",
                "Wide-eyed",
                "Open mouth",
                "Raised eyebrows",
                "Sudden reaction",
            ],
            color: "#f38375",
        },
        {
            emotion: "Calm",
            expressions: [
                "Feeling relaxed",
                "Peaceful",
                "Tranquil",
                "Steady breathing",
                "Clear mind",
            ],
            color: "#354f52",
        },
        {
            emotion: "Neutral",
            expressions: [
                "Lack of strong emotion",
                "Indifference",
                "Neither happy nor sad",
                "Neutral facial expression",
                "Unbiased",
            ],
            color: "#0ead69",
        },
    ];

    return (
        <>
            <div data-testid="home-page">
                <header className={styles.headerBar}>
                    <div className={styles.container}>
                        <div className={styles.leftContent}>
                            <h1>Emodio</h1>
                        </div>
                        <nav className={styles.rightContent}>
                            <ul>
                                <li>Services</li>
                                <li>Why Coose Us</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <section className={styles.introSection}>
                    <div className={styles.wave}>
                        <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                                className={styles.shapeFill}
                            ></path>
                        </svg>
                    </div>
                    <div className={style.stars}></div>
                    <div className={style.starsTwo}></div>
                    <div className={style.starsThree}></div>

                    <div className={styles.container}>
                        <div className={styles.introContents}>
                            <div className={styles.introContentTitle}>
                                <h1>
                                    Generate audio that reflects the emotion of
                                    your text
                                </h1>
                            </div>
                            <div className={styles.introContentInfo}>
                                <p>
                                    {" "}
                                    Our revolutionary text-to-speech software
                                    uses AI to generate audio that reflects the
                                    emotion of your text.
                                </p>
                            </div>
                            <div className={styles.introContentButton}>
                                <button>Get Started</button>
                            </div>
                            <div className={styles.introContentImage}>
                                <img
                                    src={group_emotions}
                                    alt={"group_emotions"}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.emotionsSection}>
                    <div className={styles.container}>
                        <div className={styles.emotionsContents}>
                            <div className={styles.emotionContentTitle}>
                                <h3>
                                    Take a glance at the emotions we look into
                                </h3>
                            </div>
                            <div className={styles.emotionsList}>
                                <ul>
                                    {emotions.map((emotion, index) => (
                                        <li
                                            key={index}
                                            className={
                                                activeItem === index
                                                    ? styles.active
                                                    : ""
                                            }
                                            style={
                                                {
                                                    "--Li_Colour":
                                                        emotion.color,
                                                } as CSSProperties
                                            }
                                            onClick={() => {
                                                setActiveItem(index);
                                                console.log(index, emotion);
                                            }}
                                        >
                                            {emotion.emotion}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div
                                className={styles.emotionInfoList}
                                style={
                                    {
                                        "--Li_Colour": `${emotions[activeItem].color}`,
                                    } as CSSProperties
                                }
                            >
                                <ul>
                                    {emotions[activeItem].expressions.map(
                                        (item, index) => (
                                            <li key={index}>
                                                <i>
                                                    <FiCheckCircle />
                                                </i>
                                                <p>{item}</p>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;
