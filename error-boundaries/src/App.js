import React, { Component } from 'react';
import './App.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log('ComponentDidCatch executed papu', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }
  render() {
    if (this.state.errorInfo) {
      return <React.Fragment>
        <h2 style={{color: '#f00'}}>Ops, something went wrong</h2>;
        <p>{this.state.error}</p>
        <p>{this.state.errorInfo}</p>
      </React.Fragment>
    }
    return this.props.children;
  }
}

class WillFailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  handleClick = () => {
    // It will not work as it throws the error inside a handler
    // if (this.state.counter === 5) {
    //   throw new Error('Dude it broke like hell')
    // }
    this.setState(({counter}) => {
      return {
        counter: counter + 1
      }
    });
  }
  render() {
    if (this.state.counter === 5) {
      throw new Error('Dude it broke like hell');
    }
    return (
      <span onClick={this.handleClick}>{this.state.counter}</span>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Error boundaries example</h1>
        <hr />
        <ErrorBoundary>
          <WillFailComponent />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
