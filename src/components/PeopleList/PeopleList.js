import React, { Component } from 'react';
import Person from './Person/Person'

class PeopleList extends Component {
  constructor(props){
    super(props);
    console.log('[PeopleList.js] Inside Constructor', props);
  }

  componentWillMount() {
      console.log('[PeopleList.js] Inside componentWillMount');
  }

  componentDidMount() {
      console.log('[PeopleList.js] Inside componentDidMount');
  }

  componentWillUnmount() {
    console.log('[PeopleList.js] Inside componentWillUnmount');
  }

  componentWillReceiveProps(nextProps){
    console.log('[UPDATE PeopleList.js] Inside componentWillReceiveProps',nextProps);
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[UPDATE PeopleList.js] Inside shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps,nextState){
    console.log('[UPDATE PeopleList.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE PeopleList.js] Inside componentDidUpdate');
  }

  render() {
    console.log('[PeopleList.js] Inside render');
    return this.props.people.map((person,index)=>{
      return <Person 
        position={index}
        key={person.id}
        name={person.name}
        age={person.age}
        changed={(event) => this.props.changed(event,person.id)}
        clicked={() => this.props.clicked(index)} />
      });
  }
}

export default PeopleList;