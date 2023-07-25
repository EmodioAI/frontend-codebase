import { useSelector } from "react-redux";
import FileUpload from "./components/file_upload/file_upload";
import TextEditor from "./components/text_editor/text_editor";
import styles from "./screen_two.module.css";
import { ScreenTwoProps } from "./screen_two.props";
import { RootState } from "../../store/store";
import AudioUpload from "./components/audio_upload/audio_player";

function ScreenTwo(props: ScreenTwoProps) {
    const choice = useSelector((state: RootState) => state.input_choice);
    return (
        <section data-testid="screen-two">
            <div className={styles.container}>
                {choice === 1 ? (
                    <TextEditor changeButton={props.changeButton} />
                ) : choice === 2 ? (
                    <FileUpload changeButton={props.changeButton} />
                ) : choice == 3 ? (
                    <AudioUpload changeButton={props.changeButton} />
                ) : null}
            </div>
        </section>
    );
}

export default ScreenTwo;
