Functions in JS are first-class Citizens, what does that mean? What is the difference between Function Statements and Function Expressions and function declaration? What are Anonymous Functions? What are First Class Functions? What is the difference between Function Parameter and Function Arguments? Arrow functions

These are just Jargons which are very popular in the JS community, so don't worry let's study everything in sweet and short 20 minutes power-packed JS tutorial video. I've also shared my interview experience and how the interviewer asked me these questions. So, watch this exciting video, I bet you'll love it. ❤️

---

# Functions in JavaScript: An In-Depth Guide

## Functions as First-Class Citizens
In JavaScript, functions are **first-class citizens**, meaning:
1. Functions can be assigned to variables.
2. Functions can be passed as arguments to other functions.
3. Functions can be returned from other functions.

### Example:
```javascript
// Assigning a function to a variable
const greet = function(name) {
    return `Hello, ${name}!`;
};

// Passing a function as an argument
function processGreet(fn, name) {
    console.log(fn(name));
}

processGreet(greet, "Sanju");

// Returning a function from another function
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
