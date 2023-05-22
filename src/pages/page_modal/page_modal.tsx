import { useState } from "react";
import styles from "./page_modal.module.css";
import ProgressBar from "../../general_components/progress_bar/progress_bar";
import NavButton from "../../general_components/navigation_button/navigation_button";
import { StepNumber } from "../../general_components/progress_bar/progress_bar.props";
import ScreenOne from "../screen_one/screen_one";
import { NavButtonStatus } from "../../general_components/navigation_button/navigation_button.props";

function PageModal() {
    // state to keep track of the step
    const [step, setStep] = useState<StepNumber>(1);

    //state to keep track of the button status
    const [buttonStatus, setButtonStatus] =
        useState<NavButtonStatus>("disabled");

    // function to change step based on the button clicked
    function changeStep(value: string) {
        if (value === "next") {
            setStep((prev: StepNumber) =>
                prev === 4 ? 4 : ((prev + 1) as StepNumber)
            );
        } else {
            setStep((prev: StepNumber) =>
                prev === 1 ? 1 : ((prev - 1) as StepNumber)
            );
        }
    }

    //function that changes button from disabled to enabled based on actions from screens
    function changeButtonStatus(data: NavButtonStatus) {
        setButtonStatus(data);
    }

    return (
        <>
            <section className={styles.container} data-testid="page-modal">
                <div className={styles.modal}>
                    <aside className={styles.leftside}>
                        <ProgressBar step={step} />
                    </aside>
                    <aside className={styles.rightside}>
                        <div className={styles.screensBox}>
                            {step === 1 ? (
                                <ScreenOne changeButton={changeButtonStatus} />
                            ) : (
                                "Screen 2"
                            )}
                        </div>
                        <div className={styles.buttonContainer}>
                            {step === 1 ? null : (
                                <NavButton
                                    type={"previous"}
                                    status={"enabled"}
                                    onClick={() => changeStep("prev")}
                                />
                            )}
                            {step === 4 ? null : (
                                <NavButton
                                    type={"next"}
                                    status={buttonStatus}
                                    onClick={() => changeStep("next")}
                                />
                            )}
                        </div>
                    </aside>
                </div>
            </section>
        </>
    );
}

export default PageModal;
