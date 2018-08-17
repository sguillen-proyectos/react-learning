Learning React System
=====================

# Resources
- React docs
- Cory's link
- Some links from react that are in my work quiterss feeds

## Extra resources
- https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658 - A nice approach for creating a toolchain from scratch similar to `create-react-app`.
- https://github.com/kay-is/react-from-zero - The first examples are a great way to visualize how to use React without JSX and the concept of Element has a more verbose understanding.

# Topics
## Week 1
- React documentation
  - Lifecycle management
  - Higher Order Components
  - Context API
  - New Features - read Cory's link
  - Others

## Week 2
- React router

## Week 3
- Redux
- async + await
- Redux + React Router

## Week 4
- React patterns and antipatterns - read Cory's link
- React docs API Reference
- React docs Contributing
- React internals
  - Fiber
  - Reconciliation
  - Virtual DOM
  - Reverse engineering React

# Project
Create a point of sale applications for stores, where there will be a list of items available, list clients, sell certain things to clients (stores), see reports per store, in general.

## Technical Requirements
- The application **must** have authentication
- It **must** be responsive
- It should use a CSS preprocessor
- There should be three roles: administrator, seller and clients (stores)
- It **must** have a backend

## Behavior
For clients
- Clients can see the list of products by category and price.
- Clients can request a purchase so a seller can go to the store with the requested items.
- Clients might see a purchase report.

For sellers
- Sellers can see list of products by category and price
- Sellers can see client purchase requests and process them (the purchase request will be assigned to the seller) purchase request might have a state: `open`, `in progress` and `processed`
- Sellers might see a clients-per-month report

For administrators
- CRUD for sellers
- CRUD for clients
- CRUD for products
- Assign a purchase request to a seller


# Flashcards
Q: How do I render plain html?
A: Set the `dangerouslySetInnerHTML` property on a element. The value of this needs to be an object with the form: `{ __html: '<p>html_text</p>' }`.

Q: What are the two ways to set state?
A: Sending as a parameter a the new state or a function that will receive as first argument the previous state.

Q: In which case we create a constructor and invoke `super(props)`?
A: When we want to start the state of the component

Q: What is a common convention for events and handlers?
A: on[Event] and handle[Event]

Q: What are the benefits of inmutability?
A: Inmutability allows us to know when a change has been made, something that would be a bit more complex with mutable data.

Q: What is a Functional Component?
A: A functional component is a component that does not have its own state and instead of defining it as a class, it can be defined as a simple function.

Q: What is a React element and mention some characteristics
A: It's the plain old javascript object representation of a DOM tag that will be used by React to construct the DOM, they are transpiled into calls to `React.createElement`. A React element is immutable so its children and attributes cannot be updated. It represents the UI at a certain point in time.

Q: What is the return value of a call to React.createElement?
A: An plain old javascript object that represents a virtual DOM element.

Q: What is the difference between Components and Elements?
A: Elements are the foundational building blocks that represent how the DOM will look like (virtual DOM). On the other hand, Components are small pieces of reusable code that return an Element that will be rendered

Q: Why components have to start with a capital letter?
A: React treats components starting with lowercase letters as DOM tags.

Q: What is a very important characteristic of React `props`?
A: React components must act as pure functions in the sense that props must never be updated inside a component. They must be read-only

--- 2018-08-08 ---
Q: What are pure functions?
A: A pure function is a function that does not modify the inputs and always return the same result for the same inputs.

Q: What is the `componentDidMount` method?
A: It is a lifecycle hook that is executed just after the component output has been rendered to the DOM.

Q: What is the `componentWillUnmount` method?
A: It is a lifecycle hook that is executed when the component will be removed from the DOM.

Q: Explain how updating an state could lead to an unexpected behavior?
A: `this.props` and `this.state` may be updated asynchronously, so if we have to calculate the new state based on `props` or `state` updating directly could lead to problems as `props` and `state` could be updated. One way to solve this problems is to use the second way of `setState` which instead of receiving an object it will receive a callback function which will receive as parameters the previous state and the properties at the time we want to update the state.

Q: How do events work on React?
A: React events are defined as camelCase and receive a method instead of a string. The difference that the event object passed as argument is an instance of the `SyntheticEvent` class which is a wrapper for the original native event with the same interface. The difference of this `SyntheticEvent` class is that has the same behavior in all browsers.

Q: In terms of React events, what is the problem with this approach?
```
render() {
  return <button onClick={(e) => this.handleClick(e)}>
    Click me
  </button>
}
```
A: The problem is that every time the component is rendered it will create a new callback which could lead to memory leaks.

Q: Mention some ways for conditional rendering
A: Inline if with && logical operator
```
<div>
  { someCondition &&
    <SomeComponent />
  }
</div>
```
if-else conditional operator
```
<div>
  {someCondition ? (
    <FooComponent />
  ): (
    <BarComponent />
  )}
</div>
```

Q: In which cases a component `Foo` will no be rendered even if it's called in some other component `Bar`?
A: When the return value of `render` method of component `Foo` is `''`, `false` or `null`

--- 2018-08-13 ---
Q: How is the short syntax for a react `Fragment` and in which cases it is good to use it?
A: It is
```
<>
  ...content
</>
```
And it is ok to use it when the fragment will not receive any property.

Q: In case of labeling input controls, what is property used?
A: It is the `htmlFor` property on `label` elements

Q: How can modules be loaded dynamically?
A: By using the `import(module)` function instead of the `import` directive from ES6

Q: How does the `import` function works with Create React App?
A: Create React App when detecting a call to `import` function, will create chunk javascript files where the async modules are and can be loaded asynchronously.

Q: How is context defined in react?
A: Using the `React.createContext` it returns a `Provider` and a `Consumer` which are used when initializing and consuming the context. `React.createContext` receives a default value that can be used by the `Consumer` when it does not match a `Provider`.

Q: How does a `Consumer` gets data from the `Provider`?
A: A component needs to be rendered and the content must be a function that receives the data from the provider:
```
<SomeContext.Consumer>
  { (someValue) => <SomeOtherComponent someValue={someValue} />}
</SomeContext.Consumer>
```

Q: How can I update the context from nested components?
A: Just by adding another field that is a function on the initial values when calling `createContext` and finally calling that function from the nested component just as if it's another handler.

Q: When using multiple contexts, how is the hierarchy when initializing them and when consuming them?
A: It is a tree hierarchy in the next way:
For initializing:
```
<Context1.Provider value1="value1">
  <Context2.Provider value2="value2">
    <Content ... />
  </Context2.Provider>
</Context1.Provider>
```

For consuming:
```
<Context1.Consumer>
  {value1 => {
    <Context2.Consumer>
      {value2 => {
        <Something value1 value2 />
      }}
    </Context2.Consumer>
  }}
</Context1.Consumer>
```
--- 2018-08-14 ---
Q: What are error boundaries?
A: It is a declarative way to catch render errors that happened in the component tree.

Q: How do I create an error boundary?
A: It only needs to add the `componentDidCatch` hook in the component class to indicate that the component is an error boundary.

Q: What does the `componentDidCatch` method receives?
A: It receives the error as such and the stack trace

Q: Why use an error boundary instead of the `try/catch` statement?
A: Although the try/catch statement can work great, it would not preserve the declarative nature of react, error boundaries preserve it.

Q: In which cases error boundaries won't catch errors?
A: When the errors are on a event handler, and asynchronous call, server side rendering and errors thrown in the error boundary itself rather than its children.

--- 2018-08-15 ---
Q: What is a higher order component and a higher order function?
A: A HOC is a component that returns a component. A HOF is a function that returns a function

Q: How is a HOC defined?
A:
```
function someHOC(SomeComponent) {
  return class extends React.Comonent {
    render() {
      return <SomeComponent ...this.props />
    }
  }
}
```

Q: How a HOC avoid us to use inheritance?
A: Because the HOC has logic that can be reused so a react philosophy is to use composition over inheritance.

Q: What happens when a component has a static method and this component is wrapped by a HOC?
A: By default the static methods won't be available after passing the wrapped componet as the result is a higher component without those static methods. One way to solve the issue is to assign the static methods to the higher component one by one or using a third-party library.

Q: What are some advices for HOC?
A: Never mutate the wrapped component, never use a HOC in the render method, never mutate the wrapped component.

Q: When I want to pass a property that is a HOC specific, how do I avoid that property to get to the wrapped component?
A: Instead of just passing `...props` to the wrapped component we filter before and then we pass the filtered props to the wrapped component.
```
render() {
  const { propForHOC, ...propsForWrappedComponent } = this.props;
  return <WrappedComponent ...propsForWrappedcomponent />;
}
```

Q: What is a good way to debug when using a HOC?
A: It is when adding the `displayName` attribute to the wrapper component:
```
function someHOC(Component) {
  class Wrapper extends React.Component {
    render() {
      return <Component />
    }
  }
  Wrapper.displayName = 'someHOC'
  return Wrapper;
}
```

Q: Why React needs to be imported or in scope when using JSX?
A: Because as it will be transpiled into `React.createElement`, `React` needs to be somewhere

--- 2018-08-15 ---
Q: What is the signature of `React.createElement`?
A: `React.createElement(Component, props, ...children)`

Q: What is the difference between:
  <Message msg="&lt; <" />
  <Message msg={"&lt; <"} />
A: The difference is that the first one will be evaluated and print '< <' and the second will be unescaped and will display '&lt; <'

Q: When a property is passed without a value, what does it mean?
A: It means that the default value will be evaluated as true

Q: What is a good recomendation when using profiling during development?
A: To disable react developer tools extension.

Q: What is the purpose of `shouldComponentUpdate`?
A: It is a lifecycle hook that specifies whether a component should update by returning true or false. It can be used to avoid unnecesary renders.

Q: Without using `shouldComponentUpdate`, what causes a re-render?
A: If a component updates its state it will re-render and if some of the properties assigned to the component change they the component will be re-rendered. One thing is to compare all properties or only the ones that we are interested or try to avoid passing unnecessary properties which could lead to unwanted re-renders.

Q: What is the difference between `React.Component` and `React.PureComponent`?
A: For `React.Component` we will need to implement the `shouldComponentUpdate` method but with `React.PureComponent` it will implement it by using a swallow comparasion of the old and new properties and with old and new state to update.

Q: In which cases `React.PureComponent` would not work as expected?
A: When mutating an state, in that case it will be the same reference so it will continue even if the values are different so if using inmutability `React.PureComponent` will work as expected.
