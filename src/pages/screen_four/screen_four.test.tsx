import { describe, test, expect } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import ScreenFour from "./screen_four";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "../../store/store";

// checks if Page Modal component is mounted
describe("Screen Four", () => {
    test("should render the component", () => {
        const queryClient = new QueryClient();

        const { getByTestId } = render(
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <ScreenFour changeButton={() => {}} />{" "}
                </QueryClientProvider>
            </Provider>
        );
        const component = getByTestId("screen-four");

        expect(component).toBeInTheDocument();
    });
});

// shows the audio player when play audio button is clicked
describe("Screen Four", () => {
    const queryClient = new QueryClient();

    test("should show audio player when play audio button is clicked", () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <ScreenFour changeButton={() => {}} />{" "}
                </QueryClientProvider>
            </Provider>
        );
        const component = getByTestId("play-button");
        const container_one = getByTestId("active-page-box");

        const container_one_classname = container_one.className;

        //click on buuton
        fireEvent.click(component);

        //get class name of div showing the active page
        const container_two = getByTestId("active-page-box");

        const container_two_classname = container_two.className;

        //class name must be different
        expect(container_one_classname).not.toBe(container_two_classname);
    });
});
