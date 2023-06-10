import { PayloadAction } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import { StepNumber } from "../general_components/progress_bar/progress_bar.props";
import { SET_PAGE_STEP, SET_INPUT_CHOICE } from "./actionTypes";

interface IState {
    page_step: StepNumber;
    input_choice: 0 | 1 | 2;
}

const initialState: IState = {
    page_step: 1,
    input_choice: 0,
};

const Reducers = (state = initialState, action: PayloadAction<any>) => {
    switch (action.type) {
        case PURGE:
            return initialState;

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

        default:
            return state;
    }
};

export default Reducers;
