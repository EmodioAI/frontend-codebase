import React, { useEffect } from "react";
import styles from "./progress_bar.module.css";
import { ProgressBarProps } from "./progress_bar.props";
import { FaHandPointer } from "react-icons/fa";
import { BsTextLeft } from "react-icons/bs";
import { BiAnalyse } from "react-icons/bi";
import { SiAudiomack } from "react-icons/si";

function ProgressBar(props: ProgressBarProps) {

	return (
		<>
			<div data-testid="progress-bar">
				<div className={styles.leftHeading}>
					<h3>Emodio</h3>
				</div>
				<div className={styles.stepsContent}>
					<h3>
						Step{" "}
						<span className={styles.stepNumber}>{props.step}</span>
					</h3>
					<p
						className={`${styles.stepNumberContent} ${
							props.step === 1
								? styles.active
								: styles.displayNone
						}`}>
						Please select an appropriate action to proceed with the
						upload of your text.
					</p>
					<p
						className={`${styles.stepNumberContent} ${
							props.step === 2
								? styles.active
								: styles.displayNone
						}`}>
						Get started by entering or uploading your text, and let
						the process unfold.
					</p>
					<p
						className={`${styles.stepNumberContent} ${
							props.step === 3
								? styles.active
								: styles.displayNone
						}`}>
						Deep dive into the emotions within your uploaded text
						and gain valuable insights
					</p>
					<p
						className={`${styles.stepNumberContent} ${
							props.step === 4
								? styles.active
								: styles.displayNone
						}`}>
						Giving your words a resonant voice that expresses rich
						sentiment.
					</p>
				</div>
				<ul className={styles.progressBar}>
					<li className={props.step >= 1?styles.active: ''}>
						<p>Select Action</p>

						<div className={`${props.step >= 1?styles.active: ''} ${styles.first}`}>
							<i>
								<FaHandPointer />
							</i>
						</div>
					</li>
					<li className={props.step >= 2?styles.active: ''}>
						<p>Enter Text</p>

						<div className={props.step >= 2?styles.active: ''}>
							<i>
								<BsTextLeft />
							</i>
						</div>
					</li>
					<li className={props.step >= 3?styles.active: ''}>
						<p>Emotion Analysis</p>

						<div className={props.step >= 3?styles.active: ''}>
							<i>
								<BiAnalyse />
							</i>
						</div>
					</li>
					<li className={props.step >= 4?styles.active: ''}>
						<p>Download Audio</p>

						<div className={props.step >= 4?styles.active: ''}>
							<i>
								<SiAudiomack />
							</i>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
}

export default ProgressBar;
