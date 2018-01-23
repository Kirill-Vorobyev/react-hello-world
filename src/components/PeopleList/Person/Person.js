import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxilary';
import BasicWithClass from '../../../hoc/BasicWithClass';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
    
    constructor(props){
        super(props);
        console.log('[Person.js] Inside Constructor', props);
    }
    
    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount');
        if(this.props.position === 0){
            this.inputElement.focus();
        }
    }

    componentWillUnmount() {
        console.log('[Person.js] Inside componentWillUnmount');
    }

    render () {
        console.log('[Person.js] Inside componentDidMount');
        return (
            <Aux>
                <p onClick={this.props.clicked}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    ref={(input) => {this.inputElement = input}}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
                
            </Aux>
            )
    }
}

Person.propTypes = {
    clicked: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
};

export default withClass(Person,classes.Person);