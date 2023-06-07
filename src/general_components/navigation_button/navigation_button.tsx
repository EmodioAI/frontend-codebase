import styles from "./navigation_button.module.css";
import { NavigationButtonProps } from "./navigation_button.props.ts";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

function NavButton(props: NavigationButtonProps) {
    return (
        <>
            {props.type === "next" ? (
                <button
                    className={`${styles.button} ${styles.next} ${
                        props.status === "enabled" ? null : styles.inactive
                    }`}
                    data-testid="nav-button-one"
                    onClick={props.onClick}
                >
                    <span className={styles.text}>{props.text}</span>
                    <i>
                        <HiOutlineArrowNarrowRight />
                    </i>
                </button>
            ) : (
                <button
                    className={`${styles.button} ${styles.prev} ${
                        props.status === "enabled" ? null : styles.inactive
                    }`}
                    data-testid="nav-button-two"
                    onClick={props.onClick}
                >
                    <i>
                        <HiOutlineArrowNarrowLeft />
                    </i>
                    <span className={styles.text}>{props.text}</span>
                </button>
            )}
        </>
    );
}

export default NavButton;
