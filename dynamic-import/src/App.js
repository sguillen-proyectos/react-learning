import React, { Component } from 'react';
import './App.css';
// Normal import
// import { add } from './utils';

// dynamic import
/**
 * When importing dynamically Create React App
 * will create javascript chunk files with those
 * modules in them so importing them will retrieve
 * them from the server.
 */
import('./utils').then((__module) => {
  console.log(__module.addStuff(2, 7));
})

class App extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
