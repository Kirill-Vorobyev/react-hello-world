import React, { Component } from 'react';
import classes from './App.css';
import PeopleList from '../components/PeopleList/PeopleList';
import Cockpit from '../components/Cockpit/Cockpit';
import Assignment2 from '../Assignments/Assignment2/Assignment2';
import Aux from '../hoc/Auxilary';
import BasicWithClass from '../hoc/BasicWithClass';
import withClass from '../hoc/withClass';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      people: [
        {id:'sb', name: 'Bob Smith', age:'24'},
        {id:'ps', name: 'Jane Doe', age:'35'},
        {id:'st', name: 'Joe Edward', age:'47'}
      ],
      displayFlag: false,
      displayFlagCounter: 0
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    return nextState.people !== this.state.people ||
      nextState.displayFlag !== this.state.displayFlag;
  }

  componentWillUpdate(nextProps,nextState){
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex((per) => {
      return per.id === id;
    })
    const people = [...this.state.people]
    people[personIndex].name = event.target.value;
    this.setState({people : people});
  }

  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({
      people: people
    });
  }

  togglePeopleHandler = () => {
    const currDisplayFlag = this.state.displayFlag;
    this.setState((prevState, props) => {
      return {
        displayFlag : !currDisplayFlag, 
        displayFlagCounter: prevState.displayFlagCounter + 1
      }
    })
  }

  render() {
    console.log('[App.js] Inside Render');
    //dynamic list of Person Components
    let peopleToRender = null;
    if(this.state.displayFlag){
      peopleToRender = <PeopleList 
        people={this.state.people}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
      <Aux>
        <Cockpit 
          appTitle = {this.props.title}
          showPeopleList={this.state.displayFlag}
          people={this.state.people}
          button={this.togglePeopleHandler}
          dynamicSize={this.state.displayFlagCounter}/>
        {peopleToRender}
        <Assignment2 />
      </Aux>
    );
  }
}

export default withClass(App,classes.App);
