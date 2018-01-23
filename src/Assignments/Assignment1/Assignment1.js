import React, { Component } from 'react';
import './Assignment1.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class Assignment1 extends Component {

    state = {
        usernames: [
            {user: 'ChickenCombo'},
            {user: 'TurboRooster'},
            {user: 'BakedBeans'}
        ]
    }

    updateNameHander = (event) => {
        this.setState({
            usernames: [
                {user: event.target.value},
                {user: 'TurboRooster'},
                {user: 'BakedBeans'}
            ]
        })
    }

    render(){
        return(
            <div>
                <div className="app">
                    <p>The instructions are:</p>
                    <p>Create TWO new components: UserInput and UserOutput</p>
                    <p>UserInput should hold an input element, UserOutput two paragraphs</p>
                    <p>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</p>
                    <p>Pass a username (of your choice) to UserOutput via props and display it there</p>
                    <p>Add state to the App component (=> the username) and pass the username to the UserOutput component</p>
                    <p>Add a method to manipulate the state (=> an event-handler method)</p>
                    <p>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</p>
                    <p>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</p>
                    <p>Add two-way-binding to your input (in UserInput) to also display the starting username</p>
                    <p>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</p>
                </div>
                <div className="app">
                    <UserInput name={this.state.usernames[0].user} changed={this.updateNameHander} />
                    <UserOutput name={this.state.usernames[0].user} text="This is a post"/>
                    <UserOutput name={this.state.usernames[0].user} text="This is another post"/>
                    <UserOutput name={this.state.usernames[0].user} text="Aaaand another Juan"/>
                </div>
            </div>
        )
    }


}

export default Assignment1;