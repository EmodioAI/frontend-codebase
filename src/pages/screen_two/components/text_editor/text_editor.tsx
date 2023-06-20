import { useRef, useState, useEffect } from "react";
import styles from "./text_editor.module.css";
import { ScreenTwoProps } from "../../screen_two.props";

function TextEditor(props: ScreenTwoProps) {
    const [pixels, setPixels] = useState<number>(17);
    const [wordCount, setWordCount] = useState<number>(0);

    const [inputText, setInputText] = useState<string>("");
    const fontSize = useRef<HTMLInputElement | null>(null);

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const lineNumbersRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Function to run once when the component mounts or page reloads
        props.changeButton("disabled");
        // Clean-up function (optional)
        return () => {
            props.changeButton("disabled");

            // //function to handle submit
            // function handleSubmit() {
            //     const paragraphs = inputText.split("\n"); // Split input by newline character to get separate paragraphs
            //     console.log(paragraphs);
            // }
            // handleSubmit();
        };
    }, []);

    useEffect(() => {
        const textarea = textareaRef.current;
        const lineNumbers = lineNumbersRef.current;

        if (textarea && lineNumbers) {
            const handleScroll = () => {
                lineNumbers.scrollTop = textarea.scrollTop;
            };

            textarea.addEventListener("scroll", handleScroll);

            return () => {
                textarea.removeEventListener("scroll", handleScroll);
            };
        }
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

    const lineCount = inputText.split("\n").length; // Count the number of lines

    // Generate an array of line numbers based on the line count
    const lineNumbers = Array.from(Array(lineCount).keys()).map(
        (number) => number + 1
    );

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
                <div>
                    <div className={styles.textAreaContainer}>
                        <div
                            className={styles.lineNumbers}
                            ref={lineNumbersRef}
                        >
                            {lineNumbers.map((number) => (
                                <div
                                    key={number}
                                    className={styles.lineNumber}
                                    style={{ fontSize: `${pixels}px` }}
                                >
                                    {number}
                                </div>
                            ))}
                        </div>
                        <textarea
                            ref={textareaRef}
                            value={inputText}
                            onChange={countWords}
                            placeholder="Start typing here..."
                            className={styles.textArea}
                            style={{ fontSize: `${pixels}px` }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default TextEditor;
