import React from 'react';

function FooComponent(props) {
  if (props.message === 'Foo!') {
    // return '';
    // return false;
    return null;
  }
  return <div className="foo-component">
    {props.message}
  </div>;
}

function BarComponent(props) {
  return <div className="bar-component">
    {props.message}
  </div>;
}

class Conditional extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: true
    }
  }
  handleClick = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        foo: !prevState.foo
      };
    })
  }
  render() {
    return <div>
      <button onClick={this.handleClick}>Toggle</button>
      <br />
      {this.state.foo ? (
        <FooComponent message="Foo!" />
      ) : (
        <BarComponent message="Bar!" />
      )}

    </div>;
  }
}

export default Conditional;
