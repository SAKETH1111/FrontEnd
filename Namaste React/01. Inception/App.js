 // It will take 3 arguments, first tag type,second one will give attributes 
//  to the tag like id and class,third we need to put the content we need in the first tag we can declare array if we want more than 1 element

//  const heading = React.createElement("h1",{id:"heads"},"Hello World from React!!");
 
//  heading created is basically a react object with props
//  console.log(heading);
 
// Nested Div
{/* 
<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div> 
*/}
// See the code below you can see how complex it is to create the elements.
// This is the basic way in which way create elements but it is complex. To resolve this
// we have better way to solve the issue. That is by using JSX which will make the life easy in creating the elements.


const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
[ 
    React.createElement("h1",{},"I am h1 tag"), 
    React.createElement("h2",{},"I am h2 tag")
]), 
React.createElement("div",{id:"child2"},
[ 
    React.createElement("h1",{},"I am h1 tag"), 
    React.createElement("h2",{},"I am h2 tag")
])]
);   


 // If we need to put h1 tag into the root. We need to use the ReactDom to do that because ReactDOM manages the root.
 const root = ReactDOM.createRoot(document.getElementById("root"));
 // rendering the react heading object in the root to put in the DOM tree
 root.render(parent);


//  Most costly operation in webpage is DOM manupulation,
//  Using react will help us in taking care of that.
// Javascript will be used for writing the react.