import { CSSProperties, useEffect, useState } from "react";
import styles from "./home.module.css";
import group_emotions from "../../assets/Group 6841.png";
import phone_image from "../../assets/phone.png";
import thumb_image from "../../assets/thumb.png";
import happy_button from "../../assets/Happy button.png";
import disgust_button from "../../assets/Disgust button.png";
import fear_button from "../../assets/Fear button.png";
import sad_button from "../../assets/Sad button.png";
import anger_button from "../../assets/Anger button.png";
import calm_button from "../../assets/Calm button.png";
import neutral_button from "../../assets/Neutral button.png";
import surprise_button from "../../assets/Surprise button.png";
import { FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { setActive } from "../../store/actions";
import { useDispatch } from "react-redux";
import { persistor } from "../../store/store";

function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [circles, setCircles] = useState<JSX.Element[]>([]);

    useEffect(() => {
        persistor.purge();

        function generateLine() {
            const widthSize = Math.random() * 5;
            const duration = Math.random() * 3;

            const newCircle = (
                <div
                    key={Math.random()} // Assign a unique key to each circle element
                    className={styles.circle}
                    style={{
                        width: `${widthSize}px`,
                        left: `${Math.random() * +window.innerWidth}px`,
                        animationDuration: `2${duration}s`,
                    }}
                ></div>
            );

            setCircles((prevCircles) => [...prevCircles, newCircle]);

            setTimeout(() => {
                setCircles((prevCircles) =>
                    prevCircles.filter((circle) => circle.key !== newCircle.key)
                );
            }, 5000);
        }

        const interval = setInterval(() => {
            generateLine();
        }, 50);

        return () => {
            clearInterval(interval);
        };
    });

    const [activeItem, setActiveItem] = useState<number>(0);

    function scrollToSection(className: string) {
        const elements = document.getElementsByClassName(className);
        if (elements.length > 0) {
            elements[0].scrollIntoView({ behavior: "smooth" });
        }
    }

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
            button: happy_button,
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
            color: "#008EFF ",
            button: sad_button,
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
            color: "#FF0000",
            button: anger_button,
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
            color: "#BD00FF",
            button: fear_button,
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
            color: "#00CB51",
            button: disgust_button,
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
            color: "#CE0D8D",
            button: surprise_button,
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
            color: "#03E0E0",
            button: calm_button,
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
            color: "#6D6F72",
            button: neutral_button,
        },
    ];

    return (
        <>
            <div className={styles.homeBody} data-testid="home-page">
                <header className={styles.headerBar}>
                    <div className={styles.container}>
                        <div className={styles.leftContent}>
                            <h1>Emodio</h1>
                        </div>
                        <nav className={styles.rightContent}>
                            <ul>
                                <li
                                    onClick={() =>
                                        scrollToSection(styles.emotionsSection)
                                    }
                                >
                                    Services
                                </li>
                                <li
                                    onClick={() =>
                                        scrollToSection(styles.reasonsSection)
                                    }
                                >
                                    Why Choose Us
                                </li>
                                <li
                                    onClick={() =>
                                        scrollToSection(styles.footer)
                                    }
                                >
                                    Contact
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <section className={styles.introSection}>
                    {circles}
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
                                <button
                                    onClick={() => {
                                        dispatch(setActive(true));
                                        navigate("/workspace");
                                    }}
                                >
                                    Get Started
                                </button>
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
                            <div className={styles.emotionsBox}>
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
                                    </ul>{" "}
                                </div>
                                <div className={styles.emotionsBoxIcon}>
                                    <img
                                        src={emotions[activeItem].button}
                                        alt={"Emotion emoji icon button"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.reasonsSection}>
                    <div className={styles.container}>
                        <div className={styles.reasonsContents}>
                            <h3>Why Emodio?</h3>
                            <div className={styles.reasonsContentsMain}>
                                <div className={styles.reasonsContainer}>
                                    <div
                                        className={`${styles.reasonsBox} ${styles.reasonsRight}`}
                                    >
                                        <h4>Emodio</h4>
                                        <p>
                                            Lorem ipsum dolor sit, amet
                                            consectetur adipisicing elit. Qui,
                                            fuga?
                                        </p>
                                    </div>
                                    <div
                                        className={`${styles.reasonsBox} ${styles.reasonsLeft}`}
                                    >
                                        <h4>Emodio</h4>
                                        <p>
                                            Lorem ipsum dolor sit, amet
                                            consectetur adipisicing elit. Qui,
                                            fuga?
                                        </p>
                                    </div>
                                    <div
                                        className={`${styles.reasonsBox} ${styles.reasonsRight}`}
                                    >
                                        <h4>Emodio</h4>
                                        <p>
                                            Lorem ipsum dolor sit, amet
                                            consectetur adipisicing elit. Qui,
                                            fuga?
                                        </p>
                                    </div>
                                    <div
                                        className={`${styles.reasonsBox} ${styles.reasonsLeft}`}
                                    >
                                        <h4>Emodio</h4>
                                        <p>
                                            Lorem ipsum dolor sit, amet
                                            consectetur adipisicing elit. Qui,
                                            fuga?
                                        </p>
                                    </div>
                                </div>
                                <aside className={styles.reasonsImage}>
                                    <img
                                        src={phone_image}
                                        alt={"phone image"}
                                    />
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.lowerSection}>
                    <div className={styles.container}>
                        <div className={styles.lowerContents}>
                            <div className={styles.lowerFirstContent}>
                                <h3>
                                    Start using{" "}
                                    <span
                                        style={
                                            {
                                                color: "var(--Home_Text_Colour)",
                                            } as CSSProperties
                                        }
                                    >
                                        EMODIO
                                    </span>{" "}
                                    today
                                </h3>
                                <img src={thumb_image} alt={"thumb image"} />
                            </div>
                            <h3>
                                ...for unique customization and pricing
                                arrangements
                            </h3>
                            <button onClick={() => navigate("/workspace")}>
                                Get Started
                            </button>
                        </div>
                    </div>
                </section>
                <footer className={styles.footer}>
                    <div className={styles.container}>
                        <div className={styles.footerContents}>
                            <div>
                                &copy; {new Date().getFullYear()} Emodio All
                                rights reserved
                            </div>
                            <div>+233 24 278 8852</div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Home;
