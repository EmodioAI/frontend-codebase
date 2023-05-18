import styles from "./naviagation_button.module.css";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import  {HiOutlineArrowNarrowLeft} from 'react-icons/hi'

function NavButton() {
	return (
        <>
            <button className={`${styles.button} ${styles.next}`} data-testid="nav-button">
                <span className={styles.text}>Next</span>
                <i><HiOutlineArrowNarrowRight/></i>
            </button>

            <button className={`${styles.button} ${styles.prev}`} data-testid="nav-button">
            <i><HiOutlineArrowNarrowLeft/></i>
                <span className={styles.text}>Previous</span>
            </button>

        </>
    );
}

export default NavButton;
