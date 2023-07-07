import { useState, useEffect } from "react";
import styles from "./loading_animation.module.css";

function LoadingAnimation() {
    const [messages, _] = useState([
        "Working on data...",
        "Almost there...",
        "Hold on tight...",
        "Great things take time...",
        "Stay tuned...",
    ]);
    const [currentMessage, setCurrentMessage] = useState("");

    useEffect(() => {
        let currentIndex = 0;

        const interval = setInterval(() => {
            setCurrentMessage(messages[currentIndex]);
            currentIndex = (currentIndex + 1) % messages.length;
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className={styles.loader}>
                <span className={styles.stroke}></span>
                <span className={styles.stroke}></span>
                <span className={styles.stroke}></span>
                <span className={styles.stroke}></span>
                <span className={styles.stroke}></span>
                <span className={styles.stroke}></span>
                <span className={styles.stroke}></span>
            </div>
            <div className={styles.loading_message}>
                <p>{currentMessage}</p>
            </div>
        </>
    );
}

export default LoadingAnimation;
