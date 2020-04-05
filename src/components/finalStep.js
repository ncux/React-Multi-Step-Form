import React, {useContext} from 'react';
import { StepsContext } from "../context/steps";


export const FinalStep = props => {

    const { information, previousStep } = useContext(StepsContext);

    return (
        <>
               <h2>Here is the information you entered:</h2>
               <p>First Name: <b>{ information.firstName }</b></p>
               <p>Last Name: <b>{ information.lastName }</b></p>
               <p>Job: <b>{ information.position }</b></p>
               <p>Company: <b>{ information.company }</b></p>
               <p>Location: <b>{ information.location }</b></p>

               <button className="Back" onClick={ previousStep }>
                   « Back
               </button>

        </>
    );

};

