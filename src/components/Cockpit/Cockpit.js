import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxilary';

const cockpit = (props) => {
    let btnClass = classes.Button;
    if(props.showPeopleList){
        btnClass = [classes.Button,classes.Red].join(' ');
    }
    //dynamic css class names
    let condClassName = '';
    const availableClasses = [];
    if(props.people.length <= 2){
      availableClasses.push(classes.red);
    }
    if(props.people.length <= 1){
      availableClasses.push(classes.bold);
    }
    if(props.people.length === 0 ){
      availableClasses.push(classes.underline);
    }
    condClassName = availableClasses.join(' ');

    const dynamicSizeClass = {
        'font-size' : props.dynamicSize.toString().concat('px')
    }
    
    return(
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={condClassName}>Click on the people to remove their card and change this CSS!</p>
            <p style={dynamicSizeClass}>Times Toggled: {props.dynamicSize}</p>
            <button 
                className={btnClass}
                onClick={props.button}>Toggle People!</button>
        </Aux>
    );
}

export default cockpit