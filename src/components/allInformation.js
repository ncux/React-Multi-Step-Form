import React, { useEffect, useContext } from 'react';
import { StepsContext } from "../context/steps";


export const AllInformation = props => {

    // useEffect(() => {
    //     displayStep();
    // }, []);

    const { step, displayStep } = useContext(StepsContext);

    return (
        <div className="App">
            <h2>Step { step } of 3</h2>
            { displayStep() }
        </div>
    );

};

