import { describe, test, expect } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import TextEditor from "./text_editor";
import { Provider } from "react-redux";
import store from "../../../../store/store";

// checks if Text Editor component is mounted
describe("Text Editor", () => {
    test("should render the component", () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <TextEditor changeButton={() => {}} />
            </Provider>
        );
        const component = getByTestId("text-editor");

        expect(component).toBeInTheDocument();
    });
});

// checks if text area is typeable
test("typing in text area", () => {
    render(
        <Provider store={store}>
            <TextEditor changeButton={() => {}} />
        </Provider>
    );
    const textArea = screen.getByPlaceholderText(
        "Start typing here..."
    ) as HTMLTextAreaElement;

    fireEvent.change(textArea, { target: { value: "Hello, world!" } });

    expect(textArea.value).toBe("Hello, world!");
});

//checks count of words
test("counting words", () => {
    render(
        <Provider store={store}>
            <TextEditor changeButton={() => {}} />
        </Provider>
    );
    const textArea = screen.getByPlaceholderText(
        "Start typing here..."
    ) as HTMLTextAreaElement;
    const wordCount = screen.getByTestId("word-count");

    fireEvent.change(textArea, { target: { value: "Hello, world!" } });

    expect(wordCount.textContent).toBe("2");
});
