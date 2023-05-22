import { describe, test, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import PageModal from "./page_modal";

// checks if Page Modal component is mounted
describe("Page Modal", () => {
    test("should render the component", () => {
        const { getByTestId } = render(<PageModal />);
        const component = getByTestId("page-modal");

        expect(component).toBeInTheDocument();
    });
});

// checks if Progress bar component is mounted with right step number
describe("PageModal component", () => {
    it("should render progress bar with a step number", () => {
        const { getByTestId } = render(<PageModal />);

        const valueElement = getByTestId("step-number");
        const progressBar = getByTestId("progress-bar");

        // Retrieve the value from the element and convert it to a number
        const value = valueElement.textContent;

        expect(progressBar).toBeInTheDocument();
        expect(progressBar).toHaveTextContent(`Step ${value}`);
    });
});

//checks if step number changes with button click
describe("PageModal component", () => {
    it("should change step number when a button is clicked", () => {
        const { getByTestId, getByText } = render(<PageModal />);

        const valueElement_one = getByTestId("step-number");
        const navButton = getByText("Next");

        // Retrieve the value from the element before clicking
        const valueOne = valueElement_one.textContent;

        //click on the button
        fireEvent.click(navButton);

        const valueElement_two = getByTestId("step-number");

        //retrieve the value from the element after clicking
        const valueTwo = valueElement_two.textContent;

        expect(valueOne).not.toBe(valueTwo);
    });
});

//checks if status of navigation button changes with button click
describe("PageModal component", () => {
    it("should change status of navigation button when a button is clicked", () => {
        const { getByTestId } = render(<PageModal />);

        const navButton = getByTestId("nav-button");

        //click on the button
        fireEvent.click(navButton);
        fireEvent.click(navButton);

        const navButtonClassName = navButton.className;

        expect(navButtonClassName).toContain("inactive");
    });
});