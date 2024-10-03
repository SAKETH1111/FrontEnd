High Order Component.

It takes a component has input, it enhances the component and return backs the new component is called higher order component.


UI Layer, Data Layer

accordian- is basically a clicking and expanding feature like expanding to see more information about it.

Tailwind css is divided into 12 parts so you can define the css like this w-3/12 or w-6/12 

React Dev tools

left side is UI layer
Right side is the data layer, It will show all the props and states of that component.

Profiler

You can start recording your activity, it will show all the steps you have taken after the recording stops. like what components you have touched and everything,

colorful are the components getting rendered which you will see when you do a action.

You can also check how much time each component is taking to load.

State getting lifted up, basically pasing the state as props from the parent component.

controlled - if the same component is controlling it like having state to decide the steps then it is controlled component.

UnControlled- if it is not controlled by the component, controlled by props or parent component it is uncontrolled component.

Can you modify the parent state from child. It is not possible directly but indirectly you can do that

Props Drilling.
passing data to parent to child which is like 7 or 8 levels is basically passing the props from each parent to child till the last child.

it is hectic task and not a good way. So this is mot a right way to pass the props. This is props drilling.

so how can we do that?

So achieve this we use React context to solve this. bascially we will create global place to keep our data.

example are like login details, Theme.

React Context:

will use createcontext to create the global database
