import React, { Component } from 'react';
import './App.css';

// functional component
function FooBar(props) {
  return <div className="foo">
    <div className="foo__header">{props.header}</div>
    <div className="foo__body">{props.body}</div>
  </div>;
}

class App extends Component {
  render() {
    const element = <FooBar header="Some header" body="Some body" />
    console.log('React elements are just plain old javascript objects');
    console.log(element);
    return (
      <div className="App">
        {element}
      </div>
    );
  }
}

export default App;
