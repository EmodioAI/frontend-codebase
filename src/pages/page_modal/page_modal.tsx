import { useState } from "react";
import styles from "./page_modal.module.css";
import ProgressBar from "../../general_components/progress_bar/progress_bar";
import NavButton from "../../general_components/navigation_button/navigation_button";
import { StepNumber } from "../../general_components/progress_bar/progress_bar.props";
import ScreenOne from "../screen_one/screen_one";
import { NavButtonStatus } from "../../general_components/navigation_button/navigation_button.props";
import ScreenTwo from "../screen_two/screen_two";
import ScreenThree from "../screen_three/screen_three";
import ScreenFour from "../screen_four/screen_four";
import { useDispatch, useSelector } from "react-redux";
import { RootState, persistor } from "../../store/store";
import { setPageStep } from "../../store/actions";
import { GrClose } from "react-icons/gr";

function PageModal() {
    //get state from store
    const dispatch = useDispatch();
    const pageStep = useSelector((state: RootState) => state.page_step);

    // state to keep track of the step
    const [step, setStep] = useState<StepNumber>(pageStep);

    //state to keep track of the button status
    const [buttonStatus, setButtonStatus] =
        useState<NavButtonStatus>("disabled");

    // function to change step based on the button clicked
    function changeStep(value: string) {
        if (value === "next") {
            setStep((prev: StepNumber) => {
                var value: StepNumber;
                prev === 4 ? (value = 4) : (value = (prev + 1) as StepNumber);
                dispatch(setPageStep(value));

                return value;
            });
        } else {
            setStep((prev: StepNumber) => {
                prev === 1 ? 1 : ((prev - 1) as StepNumber);
                var value: StepNumber;
                prev === 1 ? (value = 1) : (value = (prev - 1) as StepNumber);
                dispatch(setPageStep(value));
                return value;
            });
        }
    }

    //function that changes button from disabled to enabled based on actions from screens
    function changeButtonStatus(data: NavButtonStatus) {
        setButtonStatus(data);
    }

    //function to purge the store
    function purgeStore() {
        persistor.purge();
        setStep(() => {
            dispatch(setPageStep(1));
            return 1;
        });
    }

    return (
        <>
            <section className={styles.container} data-testid="page-modal">
                <div className={styles.stars}></div>
                <div className={styles.starsTwo}></div>
                <div className={styles.starsThree}></div>
                <div className={styles.modal}>
                    <div className={styles.closeButton} onClick={purgeStore}>
                        <i>
                            <GrClose />
                        </i>
                    </div>
                    <aside className={styles.leftside}>
                        <ProgressBar step={step} />
                    </aside>
                    <aside className={styles.rightside}>
                        <div className={styles.screensBox}>
                            {step === 1 ? (
                                <ScreenOne changeButton={changeButtonStatus} />
                            ) : step === 2 ? (
                                <ScreenTwo changeButton={changeButtonStatus} />
                            ) : step === 3 ? (
                                <ScreenThree
                                    changeButton={changeButtonStatus}
                                />
                            ) : step == 4 ? (
                                <ScreenFour changeButton={changeButtonStatus} />
                            ) : null}
                        </div>
                        <div className={styles.buttonContainer}>
                            {step === 1 ? null : step == 4 ? (
                                <NavButton
                                    text="Previous"
                                    type={"previous"}
                                    status={buttonStatus}
                                    onClick={() => changeStep("prev")}
                                />
                            ) : (
                                <NavButton
                                    text="Previous"
                                    type={"previous"}
                                    status={"enabled"}
                                    onClick={() => changeStep("prev")}
                                />
                            )}
                            {step === 4 ? null : (
                                <NavButton
                                    text="Next"
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
