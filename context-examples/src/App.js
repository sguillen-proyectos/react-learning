import React, { Component } from 'react';
import './App.css';
import SomeContext from './SomeContext';


function Component1(props) {
  return <Component2 message={`${props.message} to Component2`} />
}

function Component2(props) {
  return <Component3 message={`${props.message} to Component3`} />
}

function Component3(props) {
  return <Component4 message={`${props.message} to Component4`} />
}

function Component4(props) {
  return <SomeContext.Consumer>
    {(data) => {
      return <span>{props.message + data.value1 + data.value2}</span>
    }}
  </SomeContext.Consumer>
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <SomeContext.Provider value={{value1: 'value1', value2: 'value2'}}>
          <Component1 message='Component 1' />
        </SomeContext.Provider>
      </div>
    );
  }
}

export default App;
