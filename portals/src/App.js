import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';


const portalsRoot = document.getElementById('portals-root');

class OutsiderComponent extends React.Component {
  handleClick() {
    this.props.onClick && this.props.onClick('caught event from an outsider component');
  }
  render() {
    return (
      <div>
        <span>This is an outsider element</span>
        <button onClick={this.handleClick.bind(this)}>Click me!</button>
      </div>
    );
  }
}

function SomethingInTheMiddle(props) {
  return ReactDOM.createPortal(
    <OutsiderComponent
    onClick={props.onClick}
  />, portalsRoot);
}


class App extends Component {
  handleClick(msg) {
    console.log(msg);
  }
  render() {
    return (
      <div className="App">
        This is inside the App component
        <SomethingInTheMiddle onClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}

export default App;
