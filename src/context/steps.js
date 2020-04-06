import React, { createContext, useReducer } from 'react';
import { Reducer } from "./reducer";
import { NEXT_STEP, PREVIOUS_STEP, SET_JOB_DETAILS, SET_PERSONAL_INFO } from "./types";

import { PersonalInfo } from "../components/personalInfo";
import { JobDetails } from "../components/jobDetails";
import { FinalStep } from "../components/finalStep";

const GlobalState = {
    step: 1,
    information: {
        // First - personal info
        firstName: '',
        lastName: '',
        // Second - job details
        position: '',
        company: '',
        location: ''
    }
};

export const StepsContext = createContext(GlobalState);

export const StepsState = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, GlobalState);

    const nextStep = () => {
        if(state.step === 3) return;
        return dispatch({ type: NEXT_STEP, payload: state });
    };

    const previousStep = () => {
        if(state.step === 1) return;
        return dispatch({ type: PREVIOUS_STEP, payload: state });
    };

    const displayStep = () => {
        switch (state.step) {
            case 1:
                return (<PersonalInfo/>);
            case 2:
                return (<JobDetails />);
            case 3:
                return (<FinalStep />);
            default:
                return (<PersonalInfo/>);
        }
    };

    const addPersonalInfo = personalInfo => {
        dispatch({ type: SET_PERSONAL_INFO, payload: personalInfo });
        nextStep();
    };

    const addJobDetails = jobDetails => {
        dispatch({ type: SET_JOB_DETAILS, payload: jobDetails });
        nextStep();
    };

    return (
        <StepsContext.Provider value={{
            step: state.step,
            information: state.information,
            nextStep,
            previousStep,
            displayStep,
            addPersonalInfo,
            addJobDetails
        }}>
            { children }
        </StepsContext.Provider>
    )

};
