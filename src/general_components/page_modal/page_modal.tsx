import React from 'react';
import styles from './page_modal.module.css'
import ProgressBar from '../progress_bar/progress_bar';

function PageModal(){
    return (
    <>
        <section className={styles.container} data-testid='page-modal'>
            <div className={styles.modal}>
                <aside className={styles.leftside}>
                    <ProgressBar/>
                </aside>
                <aside className={styles.rightside}>

                </aside>

            </div>
        </section>
    </>
    )
}

export default PageModal;