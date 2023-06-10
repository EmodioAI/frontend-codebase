import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import PageModal from "./page_modal";
import { Provider } from "react-redux";
import store from "../../store/store";

// checks if Page Modal component is mounted
describe("Page Modal", () => {
    test("should render the component", () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <PageModal />
            </Provider>
        );
        const component = getByTestId("page-modal");

        expect(component).toBeInTheDocument();
    });
});

// checks if Progress bar component is mounted with right step number
describe("PageModal component", () => {
    it("should render progress bar with a step number", () => {
        const { getByTestId } = render ( <Provider store={store}>
        <PageModal />
    </Provider>);

        const valueElement = getByTestId("step-number");
        const progressBar = getByTestId("progress-bar");

        // Retrieve the value from the element and convert it to a number
        const value = valueElement.textContent;

        expect(progressBar).toBeInTheDocument();
        expect(progressBar).toHaveTextContent(`Step ${value}`);
    });
});

// //checks if step number changes with button click
// describe("PageModal component", () => {
//     it("should change step number when a button is clicked", () => {
//         const { container,getByTestId } = render(<PageModal />);

//         const checkboxTwo = container.querySelector("#checkbox_two") as HTMLInputElement;

//         const valueElement_one = getByTestId("step-number");
//         const navButton = getByTestId("nav-button-two");

//         // Retrieve the value from the element before clicking
//         const valueOne = valueElement_one.textContent;

//         fireEvent.click(checkboxTwo);

//         //click on the button
//         fireEvent.click(navButton);

//         const valueElement_two = getByTestId("step-number");

//         //retrieve the value from the element after clicking
//         const valueTwo = valueElement_two.textContent;

//         expect(valueOne).not.toBe(valueTwo);
//     });
// });
