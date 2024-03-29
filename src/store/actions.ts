import { NotificationProps } from "../general_components/notification_box/notification_box.props";
import { StepNumber } from "../general_components/progress_bar/progress_bar.props";
import { EmotionData } from "../pages/screen_three/screen_three.props";
import {
    SET_INPUT_CHOICE,
    SET_PAGE_STEP,
    SET_FILE,
    SET_TEXT_CONTENT,
    SET_NOTIFICATION_DETAILS,
    SET_ANALYSIS_RESULTS,
    SET_ACTIVE,
    SET_TOKEN,
    SET_NEW_AUDIO_CONTENT_STATE,
    SET_NEW_FILE_CONTENT_STATE,
    SET_NEW_ANALYSIS_CONTENT_STATE,
} from "./actionTypes";

// sets the page step
export const setPageStep = (page_step: StepNumber) => {
    return {
        type: SET_PAGE_STEP,
        payload: page_step,
    };
};

// sets the input choice
export const setInputChoice = (input_choice: 0 | 1 | 2 | 3) => {
    return {
        type: SET_INPUT_CHOICE,
        payload: input_choice,
    };
};

//sets uploaded file
export const setUploadedFile = (file: { name: string; size: number }) => {
    return {
        type: SET_FILE,
        payload: file,
    };
};

//sets uploaded file content
export const setUploadedTextContent = (text_content: string[]) => {
    return {
        type: SET_TEXT_CONTENT,
        payload: text_content,
    };
};

//sets state of uploaded contents
export const setNewAudioContentState = (state: boolean) => {
    return {
        type: SET_NEW_AUDIO_CONTENT_STATE,
        payload: state,
    };
};

//sets state of uploaded contents
export const setNewFileContentState = (state: boolean) => {
    return {
        type: SET_NEW_FILE_CONTENT_STATE,
        payload: state,
    };
};
//sets state of uploaded contents
export const setNewAnalysisContentState = (state: boolean) => {
    return {
        type: SET_NEW_ANALYSIS_CONTENT_STATE,
        payload: state,
    };
};
//sets notification details
export const setNotificationDetails = (details: NotificationProps) => {
    return {
        type: SET_NOTIFICATION_DETAILS,
        payload: details,
    };
};

//sets results from emotion analysis
export const setAnalysisResults = (results: EmotionData[]) => {
    return {
        type: SET_ANALYSIS_RESULTS,
        payload: results,
    };
};

//sets active state
export const setActive = (active: boolean) => {
    return {
        type: SET_ACTIVE,
        payload: active,
    };
};

//sets token
export const setToken = (token: string) => {
    return {
        type: SET_TOKEN,
        payload: token,
    };
};
