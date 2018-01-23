import React from 'react';
import classes from './UserInputValidation.css';

const userInputValidation = (props) => {

    let validatorText;
    if(props.input.length < 5) {
        validatorText = (
            <div className={classes.validatorFail}>
                <p>Text too short, please enter at least 5 characters.</p>
            </div>
        )
    }else{
        validatorText = (
            <div className={classes.validatorPass}>
                <p>Good, that's at least 5 characters.</p>
            </div>
        )
    }

    return (
        <div>
        {validatorText}
        </div>
    )
}

export default userInputValidation;