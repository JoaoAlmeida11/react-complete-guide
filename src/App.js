import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

// statefull/smart/container vs stateless/dumb/presentational components

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
    showPersons: false,
  };
  switchNameHandler = newName => {
    // console.log('Was clicker');
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ],
    });
  };
  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 },
      ],
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow }); //state in class components merges and not replaces
  };

  render() {
    // has limitations like :hover but can be work around
    const style = {
      backgroundColor: 'white',
      font: 'inhenrit',
      border: '1px solid blue',
      padding: '0.5rem',
      cursor: 'pointer',
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        {/* more efficient then () => this.switchNameHandler() ; use .bind */}
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Max!')}
              changed={this.nameChangedHandler}
            >
              My hobbies: Racing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
