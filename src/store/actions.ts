import { StepNumber } from "../general_components/progress_bar/progress_bar.props";
import {
    SET_INPUT_CHOICE,
    SET_PAGE_STEP,
    SET_FILE,
    SET_TEXT_CONTENT,
} from "./actionTypes";

// sets the page step
export const setPageStep = (page_step: StepNumber) => {
    return {
        type: SET_PAGE_STEP,
        payload: page_step,
    };
};

// sets the input choice
export const setInputChoice = (input_choice: 0 | 1 | 2) => {
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

