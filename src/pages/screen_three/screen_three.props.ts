import { NavButtonStatus } from "../../general_components/navigation_button/navigation_button.props";
export interface Item {
    name: string;
    color: string;
}

export interface ScreenThreeProps {
    changeButton: (data: NavButtonStatus) => void;
}

export interface EmotionData {
    emotion: string;
    emotion_results: {
        [emotion: string]: number;
    };
    tone_results: {
        [tone: string]: number;
    };
}
