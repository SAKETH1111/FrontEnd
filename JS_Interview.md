### Call, Apply and Blind

1. function borrowing - call and apply does the function borrowing. Both does the same work. but differnet ways to call
2. Bind Method - it returns the function. We need to call it when required.

```
let name = {
firstname: "Akshay",
lastname: "Saini",
｝
let printFullName = function (hometown, state) {
console. log(this.firstname + " " + this. lastname + " from
"+ hometown + "
"+ : state
}

printFullName.call(name, "Dehradun", "Uttarakhand");

let name2 = {
firstname: "Sachin", lastname: "Tendulkar",
｝
// function borrowing
printFullName. call(name2, "Mumbai", "Maharashtra");
printFullName.apply(name2, ["Mumbai", "Maharashtra"]); // in apply we need to pass the this method reference values in a bracket[]


// bind method
let printMyName = printFulltame.bind(name, "Mumbai", "Maharashtra"); // This will return the function and we will call this when ever required.
console. log (printMyName) ; printMyName () ;
```
