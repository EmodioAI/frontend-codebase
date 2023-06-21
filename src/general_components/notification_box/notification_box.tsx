import { useEffect, useState } from "react";
import styles from "./notification_box.module.css";
import { ThumbsUp, ThumbsDown } from "fluent-emoji";
import { BoxPosition } from "./notification_box.props";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setNotificationDetails } from "../../store/actions";

function Notification() {
    const dispatch = useDispatch();
    const status = useSelector((state: RootState) => state.status);
    const message = useSelector((state: RootState) => state.message);
    const state = useSelector((state: RootState) => state.state);

    const [boxPosition, setBoxPosition] = useState<BoxPosition>("up");

    // Handles dynamics of notification box
    useEffect(() => {
        if (status === true) {
            setBoxPosition("down");
            setTimeout(() => {
                setBoxPosition("up"); // Change the box position back to "up" after 3000ms
                setTimeout(() => {
                    dispatch(
                        setNotificationDetails({
                            status: false,
                            message: "",
                            state: null,
                        })
                    );
                }, 1200);
            }, 3000);
        }
    }, [status]);

    return (
        <>
            <div
                className={
                    boxPosition === "up"
                        ? styles.notificationBoxUp
                        : styles.notificationBoxDown // Corrected class name
                }
            >
                <div className={styles.notificationEmoji}>
                    {state === "success" ? (
                        <ThumbsUp />
                    ) : state === "error" ? (
                        <ThumbsDown />
                    ) : null}
                </div>
                <p
                    className={
                        boxPosition === "up"
                            ? styles.notificationMessageClose
                            : styles.notificationMessageOpen // Corrected class name
                    }
                >
                    {message}
                </p>
            </div>
        </>
    );
}

export default Notification;
