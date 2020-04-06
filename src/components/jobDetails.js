import React, { useContext, useEffect, useState } from 'react';
import { StepsContext } from "../context/steps";

export const JobDetails = props => {

    useEffect(() => {
        setPosition(information.position);
        setCompany(information.company);
        setLocation(information.location);
    }, []);

    const { information, addJobDetails, previousStep } = useContext(StepsContext);

    const [position, setPosition] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if(position == '' || company == '' || location == '') return;

        const jobDetails = { position, company, location };
        addJobDetails(jobDetails);
    };

    return (
        <>
            <h2>Job details</h2>
            <form onSubmit={ onSubmit }>
                <label>
                    Position
                    <input onChange={ event => setPosition(event.target.value) } type="text" value={ position } />
                </label>

                <label>
                    Company
                    <input onChange={ event => setCompany(event.target.value) } type="text" value={ company } />
                </label>

                <label>
                    Location
                    <input onChange={ event => setLocation(event.target.value) } type="text" value={ location } />
                </label>
                <button type="submit" className="Next »">Next</button>
            </form>

            <button className="Back" onClick={ previousStep }>
                « Back
            </button>
        </>
    );

};

