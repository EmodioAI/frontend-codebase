import { PayloadAction } from "@reduxjs/toolkit";
import { StepNumber } from "../general_components/progress_bar/progress_bar.props";
import { PURGE } from "redux-persist";
import {
    SET_PAGE_STEP,
    SET_INPUT_CHOICE,
    SET_FILE,
    SET_TEXT_CONTENT,
    SET_NOTIFICATION_DETAILS,
} from "./actionTypes";

interface IState {
    page_step: StepNumber;
    input_choice: 0 | 1 | 2;
    file: { name: string; size: number } | null;
    text_content: string[];
    status: boolean;
    message: string;
    state: "success" | "error" | null;
}

const initialState: IState = {
    page_step: 1,
    input_choice: 0,
    file: null,
    text_content: [],
    status: false,
    message: "",
    state: null,
};

const Reducers = (state = initialState, action: PayloadAction<any>) => {
    switch (action.type) {
        case PURGE:
            return {
                ...initialState,
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
        case SET_NOTIFICATION_DETAILS:
            return {
                ...state,
                status: action.payload.status,
                message: action.payload.message,
                state: action.payload.state,
            };

        default:
            return state;
    }
};

export default Reducers;
