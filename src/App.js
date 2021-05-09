import React, { Component } from 'react';
import './App.css';

class App extends Component {
  foo = () => 'Bars';
  
  render() {
    const name = "Rafa";
    return (

    <div className="App">
      <h1>Hello {this.foo()} from React, {name}</h1>
    </div>
  );
  }

}

export default App;
