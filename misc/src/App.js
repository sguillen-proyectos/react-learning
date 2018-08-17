import React, { Component } from 'react';
import Conditional from './Conditional';
import './App.css';

function Message({msg}) {
  return <React.Fragment>
    <span>{msg}</span>
    <br />
  </React.Fragment>
}

function Message2(props) {
  return <span>{props.children}</span>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Conditional Rendering</h1>
        <Conditional />
        <hr />
        <h1>Expression evaluation</h1>
        <Message msg="&lt; <" />
        <Message msg={"&lt; <"} />
        <br />
        <Message2>
          {"Some stuff &lt;3"}
        </Message2>
        <Message2>
          Some stuff &lt;3
        </Message2>
      </div>
    );
  }
}

export default App;
