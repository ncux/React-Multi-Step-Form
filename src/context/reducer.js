import {NEXT_STEP, PREVIOUS_STEP, SET_JOB_DETAILS, SET_PERSONAL_INFO} from "./types";

export const Reducer = (state, action) => {

    switch (action.type) {

        case NEXT_STEP:
            return { ...state, step: state.step + 1, information: { ...action.payload } };

        case PREVIOUS_STEP:
            return { ...state, step: state.step - 1, information: { ...action.payload } };

        case SET_PERSONAL_INFO:
            return { ...state, step: state.step + 1, information: { ...state.information, firstName: action.payload.firstName, lastName: action.payload.lastName } };

        case SET_JOB_DETAILS:
            return { ...state, step: state.step + 1, information: { ...state.information, position: action.payload.position, company: action.payload.company, location: action.payload.location } };

        default:
            return state;
    }
};

