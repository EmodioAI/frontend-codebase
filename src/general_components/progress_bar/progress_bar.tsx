import React from "react";
import styles from "./progress_bar.module.css";

function ProgressBar() {
	return (
		<>
			<div>
				<div className={styles.leftHeading}>
					<h3>Emodio</h3>
				</div>
				<div className={styles.stepsContent}>
					<h3>
						Step <span className={styles.stepNumber}>1</span>
					</h3>
					<p
						className={`${styles.stepNumberContent} ${styles.displayNone}`}>
						Enter your personal information to get closer to
						companies.
					</p>
					<p
						className={`${styles.stepNumberContent} ${styles.active}`}>
						Get to know better by adding your diploma,certificate
						and education life.
					</p>
					<p
						className={`${styles.stepNumberContent} ${styles.displayNone}`}>
						Help companies get to know you better by telling then
						about your past experiences.
					</p>
					<p
						className={`${styles.stepNumberContent} ${styles.displayNone}`}>
						Add your profile piccture and let companies find youy
						fast.
					</p>
				</div>
				<ul className={styles.progressBar}>
					<li className={styles.active}>
						<p>Personal Information</p>

						<div className={`${styles.active} ${styles.first}`}>
							<i>+</i>
						</div>
					</li>
					<li className={styles.active}>
						<p>Education</p>

						<div className={styles.active}>
							<i>+</i>
						</div>
					</li>
					<li>
						<p>Experience</p>

						<div>
							<i>+</i>
						</div>
					</li>
					<li>
						<p>Photo</p>

						<div>
							<i>+</i>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
}

export default ProgressBar;
