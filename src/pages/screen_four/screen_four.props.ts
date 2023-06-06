import { NavButtonStatus } from "../../general_components/navigation_button/navigation_button.props";

export type modal = "page_one" | "page_two";
export interface CustomStyles {
    "--progress": string;
}
export interface ScreenFourProps {
    changeButton: (data: NavButtonStatus) => void;
}
