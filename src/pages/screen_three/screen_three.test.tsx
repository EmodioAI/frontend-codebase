import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import ScreenThree from "./screen_three";
import { Provider } from "react-redux";
import store from "../../store/store";

// checks if screen three component is mounted
describe("Screen Three", () => {
    test("should render the component", () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <ScreenThree changeButton={() => {}} />
            </Provider>
        );
        const component = getByTestId("screen-three");

        expect(component).toBeInTheDocument();
    });
});
