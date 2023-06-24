import styles from "./home.module.css";
// import style from "../page_modal/page_modal.module.css";
import group_emotions from "../../assets/Group 6841.png";

function Home() {
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
                    {/* <div className={style.stars}></div>
                    <div className={style.starsTwo}></div>
                    <div className={style.starsThree}></div> */}

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
                            <div>
                                <ul>
                                    <li>Happy</li>
                                    <li>Sad</li>
                                    <li>Disgust</li>
                                    <li>Anger</li>
                                    <li>Calm</li>
                                    <li>Fear</li>
                                    <li>Surprised</li>
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
