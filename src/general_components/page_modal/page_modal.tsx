import { useState } from "react";
import styles from "./page_modal.module.css";
import ProgressBar from "../progress_bar/progress_bar";
import NavButton from "../navigation_button/navigation_button";
import { StepNumber } from "../progress_bar/progress_bar.props";

function PageModal() {
	// state to keep track of the step
	const [step, setStep] = useState<StepNumber>(1);

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

	return (
		<>
			<section className={styles.container} data-testid="page-modal">
				<div className={styles.modal}>
					<aside className={styles.leftside}>
						<ProgressBar step={step} />
					</aside>
					<aside className={styles.rightside}>
						<NavButton
							type={"next"}
							onClick={() => changeStep("next")}
						/>
						<NavButton
							type={"previous"}
							onClick={() => changeStep("prev")}
						/>
					</aside>
				</div>
			</section>
		</>
	);
}

export default PageModal;
