import React from 'react';

const basicWithClass = (props) => {
    return (
        <div className={props.classes}>
            {props.children}
        </div>
    )
}

export default basicWithClass;