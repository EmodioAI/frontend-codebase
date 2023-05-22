import { useEffect } from "react";
import styles from "./screen_one.module.css";
import { FaRegKeyboard } from "react-icons/fa";
import { MdUploadFile } from "react-icons/md";
import { ScreenOneProps } from "./screen_one.props";

function ScreenOne(props: ScreenOneProps) {
    useEffect(() => {
        const checkboxOne = document.getElementById(
            "checkbox_one"
        ) as HTMLInputElement;
        const checkboxTwo = document.getElementById(
            "checkbox_two"
        ) as HTMLInputElement;

        if (!checkboxOne.checked && !checkboxTwo.checked) {
            props.changeButton("disabled");
        }
    }, []);

    //prevents a button from being checked when the other is checked
    function handleCheckboxClick(e: React.ChangeEvent<HTMLInputElement>) {
        const checkboxOne = document.getElementById(
            "checkbox_one"
        ) as HTMLInputElement;
        const checkboxTwo = document.getElementById(
            "checkbox_two"
        ) as HTMLInputElement;

        if (e.target.id === "checkbox_one") {
            checkboxTwo.checked = false;
            props.changeButton("enabled");

            if (!checkboxOne.checked) {
                props.changeButton("disabled");
            }
        } else {
            checkboxOne.checked = false;
            props.changeButton("enabled");

            if (!checkboxTwo.checked) {
                props.changeButton("disabled");
            }
        }
    }

    return (
        <>
            <section
                data-testid="screen-one"
                className={styles.screenOneContents}
            >
                <div className={styles.upperContent}>
                    <h2>Click on a button of your choice to proceed</h2>
                    <p>Only text is handled</p>
                </div>
                <div className={styles.lowerContent}>
                    <div>
                        <label htmlFor="checkbox_one">
                            <input
                                type="checkbox"
                                id="checkbox_one"
                                onChange={handleCheckboxClick}
                            />
                            <span>
                                <i>
                                    <FaRegKeyboard />
                                </i>
                                Type Text
                            </span>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="checkbox_two">
                            <input
                                type="checkbox"
                                id="checkbox_two"
                                onChange={handleCheckboxClick}
                            />
                            <span>
                                <i>
                                    <MdUploadFile />
                                </i>
                                Upload File
                            </span>
                        </label>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ScreenOne;
