import styles from "./page_modal.module.css";
import ProgressBar from "../progress_bar/progress_bar";
import NavButton from "../naviagation_button/naviagation_button";

function PageModal() {
	return (
		<>
			<section className={styles.container} data-testid="page-modal">
				<div className={styles.modal}>
					<aside className={styles.leftside}>
						<ProgressBar step={2} />
					</aside>
					<aside className={styles.rightside}>
						<NavButton />
					</aside>
				</div>
			</section>
		</>
	);
}

export default PageModal;
