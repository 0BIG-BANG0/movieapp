1. make a module name MovieCard.js
2. make a class Component and extend Component(Component is a react object) from it 
3. When using class Component we use render rather than return in Funtional Component
4. inside render give the structure HTML
5. giving icon to star + & - when on click it will increase
6. we are not going to hardcode data everytime so we are going to fetch and for that first we make constructor and then we use  \\ this.state - react says when we want to store any data then we use state.
7. using class component we extend Component so we use super() to call the constructor of the inherited class .
8. Destructure the data use in constructor inside the render and then directly use it {} inside curly braces. if not destructure then {this.state.title} you have to write this instead

# State in React
State is a built-in object in React that is used to contain dynamic information about a
component. Unlike props that are passed from the outside, a component maintains
its own state.

A component's state is mutable and it can change over time. Whenever it changes,
the component re-renders.

## Adding an initial state
To add an initial state to a component instance we give that component a state
property. This property should be declared inside of the class constructor and should
be set to an object with key and value pairs. We must also call super with props
inside of the constructor to access common properties of the built-in Component
class.
## Super
The super keyword calls the constructor of the parent class. In our case the call to
super passes the props argument to the constructor of React.Component class and
saves the return value for the derived class component.

9. use arrow function on onClick function to skip binding
10. addStars() - we use setState() - \\ 1. Updates the state
                                     \\ 2. re-renders the component   (this is the main reason of setState that on a click it re-renders in UI)

11. Apply Logic on add and minusStar() 

# Asynchronous

# Nature of this.setState is asynchronous and true for both form
 ###      Summary -  1. this.setState updates the state asynchronously.
 ###                 2. The immediate console.log logs the old state.
 ###                 3. The callback inside this.setState logs the new state after the update.

# Batching
## 1st Form

### IF we write multiple this .setState What reat will do is it will batch it into 1 and consider the last this.setState.

## 2nd Form

### in second form it takes previous state as an argument so when multiple call are it updates it rerenders it with the updated value.
## If it is called 3 times then on one Click 1.5 will be there.