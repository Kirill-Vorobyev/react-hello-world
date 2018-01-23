import React, { Component } from 'react';
import UserInputValidation from './Components/UserInputValidation';
import CharComponent from './Components/CharComponent';

class Assignment2 extends Component {

    state = {
        input: ""
    }

    inputChangedHandler = (event) => {
        this.setState(
            {
                input: event.target.value
            }
        )
    }

    deleteCharHandler = (index) => {
        console.log('yay');
        const stateStringArray = this.state.input.split('');
        stateStringArray.splice(index,1);
        this.setState({
            input: stateStringArray.join('')
        })
    }

    render() {
        
        const inputString = this.state.input.split('');
        let charComponents = inputString.map((theChar,index) => {
            return <CharComponent char={theChar} key={index} clicked={() => this.deleteCharHandler(index)}/>
        })
        let message = null;
        if(charComponents.length > 0){
            message = <p>Click the boxes to remove the character from the input</p>
        }

        return(
            <div>
                <br/>
                <h2>Simple Validator and Dynamic Edit</h2>
                <input type="text" onChange={this.inputChangedHandler} value={this.state.input} />
                <UserInputValidation input={this.state.input}/>
                {charComponents}
                {message}
            </div>
        )
    }
}

export default Assignment2;