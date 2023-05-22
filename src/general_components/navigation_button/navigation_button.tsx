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
                    data-testid="nav-button"
                    onClick={props.onClick}
                >
                    <span className={styles.text}>Next</span>
                    <i>
                        <HiOutlineArrowNarrowRight />
                    </i>
                </button>
            ) : (
                <button
                    className={`${styles.button} ${styles.prev} ${
                        props.status === "enabled" ? null : styles.inactive
                    }`}
                    data-testid="nav-button"
                    onClick={props.onClick}
                >
                    <i>
                        <HiOutlineArrowNarrowLeft />
                    </i>
                    <span className={styles.text}>Previous</span>
                </button>
            )}
        </>
    );
}

export default NavButton;