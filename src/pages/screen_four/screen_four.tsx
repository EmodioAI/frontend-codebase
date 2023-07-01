import { useEffect, useState, useRef } from "react";
import styles from "./screen_four.module.css";
import { GoPlay } from "react-icons/go";
import { RiDownloadCloudFill } from "react-icons/ri";
import NavButton from "../../general_components/navigation_button/navigation_button";
import { CustomStyles, modal, ScreenFourProps } from "./screen_four.props";
import test from "../../assets/test.wav";
import { FaPlay, FaPause } from "react-icons/fa";

function ScreenFour(props: ScreenFourProps) {
    const [changePage, setChangePage] = useState<modal>("page_one");
    const [changeIcon, setChangeIcon] = useState<boolean>(true);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (changePage === "page_one") {
            props.changeButton("enabled");
        }
    }, [changePage]);

    function handleTimeUpdate() {
        const audioCurrent = audioRef.current;
        if (audioCurrent) {
            const currentTime = audioCurrent.currentTime;
            setCurrentTime(currentTime);
            setProgress(
                Math.floor((currentTime / audioCurrent.duration) * 100)
            );
        }
    }

    const customStyles: CustomStyles = {
        "--progress": `${progress}%`,
    };

    function formatTime(time: number): string {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        const formattedMinutes = String(minutes).padStart(2, "0");
        const formattedSeconds = String(seconds).padStart(2, "0");

        return `${formattedMinutes}:${formattedSeconds}`;
    }

    function playPause() {
        const audioElement = audioRef.current;
        if (audioElement) {
            if (audioElement.paused) {
                // Audio is currently paused, so play it
                if (audioElement.ended) {
                    setProgress(0);
                    setTimeout(() => {
                        audioElement.play();
                        setChangeIcon(false);
                    }, 1000);
                } else {
                    audioElement.play();
                    setChangeIcon(false);
                }
            } else {
                // Audio is currently playing, so pause it
                audioElement.pause();
                setChangeIcon(true);
            }
        }
    }

    // Perform actions needed when the audio ends
    const handleAudioEnded = () => {
        setChangeIcon(true);
        setCurrentTime(0);
    };

    const handleDownload = () => {
        // Replace "your-audio-file.mp3" with the actual path to your file
        const downloadUrl = test;
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = "your-audio-file.mp3"; // Optional: specify the downloaded file name
        link.click();
    };

    return (
        <>
            <section className={styles.container} data-testid="screen-four">
                <div className={styles.title}>
                    <h3>Listen with different preferences.</h3>
                </div>
                <div className={styles.containerBox}>
                    <div
                        data-testid="active-page-box"
                        className={
                            changePage === "page_one"
                                ? styles.button_box
                                : styles.audio_box
                        }
                    >
                        <div
                            className={styles.buttonBox}
                            onClick={() => {
                                setChangePage("page_two");
                                props.changeButton("disabled");
                                handleAudioEnded();
                                setProgress(0);
                            }}
                            data-testid="play-button"
                        >
                            <i>
                                <GoPlay />
                            </i>
                            <button>Play</button>
                        </div>

                        <div
                            className={styles.buttonBox}
                            onClick={handleDownload}
                        >
                            <i>
                                <RiDownloadCloudFill />
                            </i>
                            <button>Download</button>
                        </div>
                    </div>
                    <div
                        className={
                            changePage === "page_one"
                                ? styles.audio_box
                                : styles.button_box
                        }
                    >
                        <div className={styles.backBtn}>
                            <NavButton
                                text="Go Back"
                                type={"previous"}
                                status={"enabled"}
                                onClick={() => {
                                    setChangePage("page_one");
                                    props.changeButton("enabled");
                                }}
                            />
                        </div>
                        <div className={styles.audioBox}>
                            <audio
                                id="audio-play"
                                src={test}
                                ref={audioRef}
                                onTimeUpdate={handleTimeUpdate}
                                onEnded={handleAudioEnded}
                            ></audio>
                            <div className={styles.player}>
                                <div className={styles.control}>
                                    <i
                                        className={styles.playBtn}
                                        onClick={playPause}
                                    >
                                        {changeIcon === true ? (
                                            <FaPlay />
                                        ) : (
                                            <FaPause />
                                        )}
                                    </i>
                                </div>
                                <div className={styles.info}>
                                    Audio mack
                                    <div className={styles.bar}>
                                        <div
                                            className={styles.progress}
                                            style={customStyles as any}
                                        ></div>
                                    </div>
                                </div>

                                <div className={styles.current}>
                                    {currentTime === 0
                                        ? "00:00"
                                        : `${formatTime(currentTime)}`}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ScreenFour;
