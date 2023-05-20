import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import NavButton from "./navigation_button";

// checks if Navigation button component is mounted
describe("Navigation button ", () => {
	test("should render the component", () => {
		const { getByTestId } = render(<NavButton type='next' onClick={()=>{}} />);
		const component = getByTestId("nav-button");

		expect(component).toBeInTheDocument();
	});
});


//checks if the correct type of button is rendered
describe("Navigation button ", () => {
    it("should render the component", () => {
        const { getByTestId } = render(<NavButton type='next' onClick={()=>{}} />);
        const component = getByTestId("nav-button");

        expect(component).toHaveTextContent("Next");
    });
});
