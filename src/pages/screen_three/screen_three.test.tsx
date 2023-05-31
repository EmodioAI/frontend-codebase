import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import ScreenThree from "./screen_three";

// checks if screen three component is mounted
describe("Screen Three", () => {
    test("should render the component", () => {
        const { getByTestId } = render(<ScreenThree />);
        const component = getByTestId("screen-three");

        expect(component).toBeInTheDocument();
    });
});

//check if colors reshuffle for emotions on page refresh
describe("Color display ", () => {
    test("should do color list order comparison", () => {
        // Render the component
        const { rerender, getAllByRole } = render(<ScreenThree />);

        // Get the li list from the component
        const actualList = getAllByRole("listitem").map((element) => {
            // Get the computed style of the element
            const computedStyle = window.getComputedStyle(element);

            // Get the value of the background color
            const backgroundColor =
                computedStyle.getPropertyValue("background-color");

            return backgroundColor;
        });

        // Simulate component refresh
        rerender(<ScreenThree />);

        // Get the li list from the component
        const notExpectedList = getAllByRole("listitem").map((element) => {
            // Get the computed style of the element
            const computedStyle = window.getComputedStyle(element);

            // Get the value of the background color
            const backgroundColor =
                computedStyle.getPropertyValue("background-color");

            return backgroundColor;
        });

        // Compare the lists
        expect(actualList).not.toBe(notExpectedList);
    });
});
