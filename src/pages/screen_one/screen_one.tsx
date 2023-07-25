import { useEffect } from "react";
import styles from "./screen_one.module.css";
import { FaRegKeyboard, FaRegFileAudio } from "react-icons/fa";
import { MdUploadFile } from "react-icons/md";
import { ScreenOneProps } from "./screen_one.props";
import { useDispatch } from "react-redux";
import { setInputChoice } from "../../store/actions";

function ScreenOne(props: ScreenOneProps) {
    const dispatch = useDispatch();

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
        const checkboxThree = document.getElementById(
            "checkbox_three"
        ) as HTMLInputElement;

        if (e.target.id === "checkbox_one") {
            checkboxTwo.checked = false;
            checkboxThree.checked = false;
            props.changeButton("enabled");
            dispatch(setInputChoice(1));

            if (!checkboxOne.checked) {
                props.changeButton("disabled");
                dispatch(setInputChoice(0));
            }
        } else if (e.target.id === "checkbox_two") {
            checkboxOne.checked = false;
            checkboxThree.checked = false;
            props.changeButton("enabled");
            dispatch(setInputChoice(2));

            if (!checkboxTwo.checked) {
                props.changeButton("disabled");
                dispatch(setInputChoice(0));
            }
        } else if (e.target.id === "checkbox_three") {
            checkboxOne.checked = false;
            checkboxTwo.checked = false;
            props.changeButton("enabled");
            dispatch(setInputChoice(3));

            if (!checkboxThree.checked) {
                props.changeButton("disabled");
                dispatch(setInputChoice(0));
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
                    <div>
                        <label htmlFor="checkbox_three">
                            <input
                                type="checkbox"
                                id="checkbox_three"
                                onChange={handleCheckboxClick}
                            />
                            <span>
                                <i>
                                    <FaRegFileAudio />
                                </i>
                                Upload Audio
                            </span>
                        </label>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ScreenOne;
