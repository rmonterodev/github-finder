import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  render() {

    const loading = false;
    const name = 'Rafa';
    const showName = true;

    return (

    <div className="App">
      {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>}
    </div>
  );
  }

}

export default App;
