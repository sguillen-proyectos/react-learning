import React, { Component } from 'react';
import './App.css';


class ReactSelect extends Component {
  constructor(props) {
    super(props);
    this.el = React.createRef();
  }
  componentDidMount() {
    this.$el = window.$(this.el);
    this.$el.chosen();
  }
  componentWillUnmount() {
    this.$el.chosen('destroy');
  }
  render() {
    return <select className="Chosen-select" ref={el => this.el = el}>
      {this.props.children}
    </select>

  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactSelect>
          <option>op 1</option>
          <option>op 2</option>
          <option>op 3</option>
        </ReactSelect>
      </div>
    );
  }
}

export default App;
