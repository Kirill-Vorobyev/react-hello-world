import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return(
    <div className="output">
        <p>{props.name}</p>
        <p>{props.text}</p>
    </div>
    );
}

export default userOutput;