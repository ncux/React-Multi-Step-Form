import React, {useContext, useState} from 'react';
import { StepsContext } from "../context/steps";


export const PersonalInfo = props => {

    const { addPersonalInfo } = useContext(StepsContext);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if(firstName == '' || lastName == '') return;

        const personalInfo = { firstName, lastName };
        addPersonalInfo(personalInfo);
        setFirstName('');
        setLastName('');
    };

    return (
        <>
            <h2>Personal information</h2>
            <form onSubmit={ onSubmit }>
                <label>
                    First name
                    <input onChange={ event => setFirstName(event.target.value) } type="text" value={ firstName } />
                </label>

                <label>
                    Last name
                    <input onChange={ event => setLastName(event.target.value) } type="text" value={ lastName } />
                </label>
                <button type="submit" className="btn">Next</button>
            </form>
        </>
    );

};

