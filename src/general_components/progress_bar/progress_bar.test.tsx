import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import ProgressBar from "./progress_bar";

// checks if Progress bar component is mounted
describe("Progres bar", () => {
    test("should render the component", () => {
        const { getByTestId } = render(<ProgressBar step={1} />);
        const component = getByTestId("progress-bar");

        expect(component).toBeInTheDocument();
    });
});

//assert if step number is rendered
describe("Progress bar", () => {
    it("should retrieve the value of a component", () => {
        const { getByText } = render(<ProgressBar step={2} />);

        const valueElement = getByText(2);

        // Retrieve the value from the element and convert it to a number
        const value = valueElement?.textContent
            ? parseInt(valueElement.textContent)
            : null;

        // Assert the expected value and check if the element is rendered
        expect(value).toBe(2);
    });
});

//check if first component is active when step number is 1
describe("Progress bar", () => {
    it("should retrieve the class name of a component", () => {
        const text: string =
            "Please select an appropriate action to proceed with the upload of your text.";

        const { getByText } = render(<ProgressBar step={1} />);

        const valueElement = getByText(text);

        // Retrieve the value from the element and convert it to a number
        const componentClassName = valueElement.className;

        // Assert the expected value and check if the element is rendered
        expect(componentClassName).toContain("stepNumberContent");
        expect(componentClassName).toContain("active");
    });
});

//check if number of active step components is equal to the step number
describe("ProgressBar", () => {
    it("should count the number of active list items", () => {
        const step = 3; // Set the desired step value for testing
        const { getAllByRole } = render(<ProgressBar step={step} />);

        const listItems = getAllByRole("listitem");

        const activeItems = listItems.filter((item) =>
            item.className.includes("active")
        );

        expect(activeItems.length).toBe(step);
    });
});
