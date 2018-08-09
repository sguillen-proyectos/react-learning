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
