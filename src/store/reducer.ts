import { PayloadAction } from "@reduxjs/toolkit";
import { StepNumber } from "../general_components/progress_bar/progress_bar.props";
import { PURGE } from "redux-persist";
import {
    SET_PAGE_STEP,
    SET_INPUT_CHOICE,
    SET_FILE,
    SET_TEXT_CONTENT,
    SET_NOTIFICATION_DETAILS,
    SET_ANALYSIS_RESULTS,
    SET_NEW_AUDIO_CONTENT_STATE,
    SET_NEW_FILE_CONTENT_STATE,
    SET_NEW_ANALYSIS_CONTENT_STATE,
    SET_ACTIVE,
    SET_TOKEN,
} from "./actionTypes";

interface IState {
    is_active: boolean;
    page_step: StepNumber;
    input_choice: 0 | 1 | 2 | 3;
    file: { name: string; size: number } | null;
    text_content: string[];
    isNewAudioContent: boolean;
    isNewFileContent: boolean;
    isNewAnalysisContent: boolean;
    status: boolean;
    message: string;
    state: "success" | "error" | null;
    analysis_results: string[];
    token: string;
}

const initialState: IState = {
    is_active: false,
    page_step: 1,
    input_choice: 0,
    file: null,
    text_content: [],
    isNewAudioContent: false,
    isNewFileContent: false,
    isNewAnalysisContent: false,
    status: false,
    message: "",
    state: null,
    analysis_results: [],
    token: "",
};

const Reducers = (state = initialState, action: PayloadAction<any>) => {
    switch (action.type) {
        case PURGE:
            return {
                ...initialState,
            };
        case SET_ACTIVE:
            return {
                ...state,
                is_active: action.payload,
            };

        case SET_PAGE_STEP:
            return {
                ...state,
                page_step: action.payload,
            };

        case SET_INPUT_CHOICE:
            return {
                ...state,
                input_choice: action.payload,
            };

        case SET_FILE:
            return {
                ...state,
                file: action.payload,
            };

        case SET_TEXT_CONTENT:
            return {
                ...state,
                text_content: action.payload,
            };

        case SET_NEW_AUDIO_CONTENT_STATE:
            return {
                ...state,
                isNewAudioContent: action.payload,
            };

        case SET_NEW_FILE_CONTENT_STATE:
            return {
                ...state,
                isNewFileContent: action.payload,
            };

        case SET_NEW_ANALYSIS_CONTENT_STATE:
            return {
                ...state,
                isNewAnalysisContent: action.payload,
            };
        case SET_NOTIFICATION_DETAILS:
            return {
                ...state,
                status: action.payload.status,
                message: action.payload.message,
                state: action.payload.state,
            };

        case SET_ANALYSIS_RESULTS:
            return {
                ...state,
                analysis_results: action.payload,
            };

        case SET_TOKEN:
            return {
                ...state,
                token: action.payload,
            };

        default:
            return state;
    }
};

export default Reducers;
