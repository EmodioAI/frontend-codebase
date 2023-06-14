import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
// import ScreenTwo from "./screen_two";
import TextEditor from "./components/text_editor/text_editor";
// import store from "../../store/store";
// import { Provider } from "react-redux";

// // checks if screen two component is mounted
// describe("Screen Two", () => {
//     test("should render the component", () => {
//         const { getByTestId } = render(
//             <Provider store={store}>
//                 <ScreenTwo changeButton={() => {}} />{" "}
//             </Provider>
//         );
//         const component = getByTestId("screen-two");

//         expect(component).toBeInTheDocument();
//     });
// });

// checks if Page Modal component is mounted
describe("Text Editor", () => {
    test("should render the component", () => {
        const { getByTestId } = render(<TextEditor changeButton={() => {}} />);
        const component = getByTestId("text-editor");

        expect(component).toBeInTheDocument();
    });
});
