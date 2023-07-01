import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";
import { BrowserRouter } from "react-router-dom";
import Home from "./home";

// checks if Home Page is mounted
describe("Home Page", () => {
    test("should render the component", () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            </Provider>
        );
        const component = getByTestId("home-page");

        expect(component).toBeInTheDocument();
    });
});
