import TextEditor from "./components/text_editor/text_editor";
import styles from "./screen_two.module.css";

function ScreenTwo() {
  return (
    <section data-testid='screen-two'>
    <div className={styles.container}>
      <TextEditor />
    </div>
    </section>
  );
}

export default ScreenTwo;