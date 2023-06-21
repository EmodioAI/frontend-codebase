import { PayloadAction } from "@reduxjs/toolkit";
import { StepNumber } from "../general_components/progress_bar/progress_bar.props";
import {
    SET_PAGE_STEP,
    SET_INPUT_CHOICE,
    SET_FILE,
    SET_TEXT_CONTENT,
} from "./actionTypes";

interface IState {
    page_step: StepNumber;
    input_choice: 0 | 1 | 2;
    file: { name: string; size: number } | null;
    text_content: string[];
}

const initialState: IState = {
    page_step: 1,
    input_choice: 0,
    file: null,
    text_content: [],
};

const Reducers = (state = initialState, action: PayloadAction<any>) => {
    switch (action.type) {
  
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

        default:
            return state;
    }
};

export default Reducers;
