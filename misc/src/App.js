import React, { Component } from 'react';
import Conditional from './Conditional';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Conditional Rendering</h1>
        <Conditional />
        <hr />
      </div>
    );
  }
}

export default App;
