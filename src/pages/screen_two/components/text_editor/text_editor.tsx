import { useRef, useState, useEffect } from "react";
import styles from "./text_editor.module.css";
import { ScreenTwoProps } from "../../screen_two.props";

function TextEditor(props: ScreenTwoProps) {
    const [pixels, setPixels] = useState<number>(17);
    const [wordCount, setWordCount] = useState<number>(0);

    const [inputText, setInputText] = useState<string>("");
    const fontSize = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        // Function to run once when the component mounts or page reloads
        props.changeButton("disabled");
        // Clean-up function (optional)
        return () => {
            props.changeButton("disabled");
        };
    }, []);

    //function to handle font size
    function handlePixel() {
        if (fontSize.current && fontSize.current.value) {
            setPixels(Number(fontSize.current.value));
        }
    }

    //function to count words
    function countWords(
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) {
        setInputText(event.target.value);
        if (event.target.value) {
            const text = event.target.value;
            const words = text.trim().split(" ");
            setWordCount(words.length);
            props.changeButton("enabled");
        } else {
            setWordCount(0);
            props.changeButton("disabled");
        }
    }

    return (
        <>
            <div data-testid="text-editor">
                <div className={styles.toolBox}>
                    <div className={`${styles.first} ${styles.box}`}>
                        <h4>Font Size:</h4>
                        <input
                            type="number"
                            id="number"
                            min={17}
                            max={35}
                            ref={fontSize}
                            onChange={handlePixel}
                            value={pixels}
                        />
                    </div>
                    <div className={`${styles.second} ${styles.box}`}>
                        <h4>Word Count:</h4>
                        <span data-testid="word-count">{wordCount}</span>
                    </div>
                </div>
                <div className={styles.textArea}>
                    <textarea
                        placeholder="Start typing here..."
                        style={{ fontSize: `${pixels}px` }}
                        value={inputText}
                        onChange={countWords}
                    ></textarea>
                </div>
            </div>
        </>
    );
}

export default TextEditor;
