Learning React System
=====================

# Resources
- React docs
- Cory's link
- Some links from react that are in my work quiterss feeds

# Topics
## Week 1
- React documentation
- Lifecycle management
- Higher Order Components
- Context API
- New Features - read Cory's link

## Week 2
- React router

## Week 3
- Redux
- async + await
- Redux + React Router

## Week 4
- React patterns and antipatterns - read Cory's link
- React internals
  - Fiber
  - Reconciliation
  - Virtual DOM
  - Reverse engineering React

# Project
Create a point of sale applications for stores, where there will be a list of items available, list clients, sell certain things to clients (stores), see reports per store, in general.

## Requirements
- The application **must** have authentication
- It **must** be responsive
- It should use CSS preprocessors
- There should be three roles: administrator, seller and clients (stores)
- It **must** have a backend


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
