import FileUpload from "./components/file_upload/file_upload";
// import TextEditor from "./components/text_editor/text_editor";
import styles from "./screen_two.module.css";
import { ScreenTwoProps } from "./screen_two.props";

function ScreenTwo(props: ScreenTwoProps) {
    return (
        <section data-testid="screen-two">
            <div className={styles.container}>
                {/* <TextEditor changeButton={props.changeButton} /> */}
                <FileUpload changeButton={props.changeButton} />
            </div>
        </section>
    );
}

export default ScreenTwo;
