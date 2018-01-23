import React from 'react'
import classes from './CharComponent.css'

const charComponent = (props) => {
    return (
        <div className={classes.char} onClick={props.clicked}>
            <p>{props.char}</p>
        </div>
    )
}

export default charComponent;