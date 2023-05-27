// import TextEditor from "./components/text_editor/text_editor";
import FileUpload from "./components/file_upload/file_upload";
import styles from "./screen_two.module.css";

function ScreenTwo() {
    return (
        <section data-testid="screen-two">
            <div className={styles.container}>
                <FileUpload/>
            </div>
        </section>
    );
}

export default ScreenTwo;
