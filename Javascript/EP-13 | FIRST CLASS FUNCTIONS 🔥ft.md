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
```

---

# Function Statements vs. Function Expressions vs. Function Declarations

## Function Declarations
A **function declaration** defines a named function. It is **hoisted**, meaning it can be used before its definition appears in the code.

### Example:
```javascript
// Calling the function before it's defined (hoisting)
sayHello("Sanju");

function sayHello(name) {
    console.log(`Hello, ${name}`);
}

// Output: Hello, Sanju
```


---


You're correct; the explanation for **function statements** is missing above. Let's clarify and add that here:

---

### Function Statements

A **function statement** is another name for a **function declaration**. These terms are often used interchangeably. A function statement explicitly declares a function with a name, and it is hoisted to the top of its scope, meaning it can be used before its declaration in the code.

#### Example:
```javascript
// Function statement (also called function declaration)
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Function can be called before its declaration because of hoisting
greet("Sanju"); // Output: Hello, Sanju
```

#### Key Features:
1. **Always Named**: A function statement must have a name.
2. **Hoisting**: Function statements are hoisted, so they are available anywhere in the scope in which they are defined.
3. **Explicit Definition**: Used when defining reusable functions.

---

To summarize:

| Feature                     | Function Statement (Declaration) | Function Expression          |
|-----------------------------|-----------------------------------|------------------------------|
| Syntax                     | `function foo() {}`              | `const foo = function() {}`  |
| Naming                     | Always named                     | Can be anonymous or named    |
| Hoisting                   | Yes                              | No                           |
| Usage Before Definition     | Allowed                         | Not allowed                  |

---

I’ve added the distinction to ensure everything is clear! If you have more questions, feel free to ask. 😊

---


Here is a detailed explanation of all your queries formatted in GitHub Markdown:

```markdown
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
```

---

## Function Statements vs. Function Expressions vs. Function Declarations

### Function Declarations
A **function declaration** defines a named function and is hoisted, meaning it can be used before it's defined in the code.

#### Example:
```javascript
sayHello("Sanju");

function sayHello(name) {
    console.log(`Hello, ${name}`);
}
```

---

### Function Expressions
A **function expression** defines a function as part of an expression. It can be anonymous or named. Function expressions are not hoisted.

#### Example:
```javascript
// Anonymous function expression
const sayHello = function(name) {
    console.log(`Hello, ${name}`);
};

sayHello("Sanju");

// Named function expression
const sayHelloNamed = function sayHelloFunction(name) {
    console.log(`Hello, ${name}`);
};

sayHelloNamed("Sanju");
```

---

### Key Differences:
| Feature                     | Function Declaration | Function Expression |
|-----------------------------|----------------------|---------------------|
| Hoisting                   | Yes                 | No                  |
| Naming                     | Always named        | Can be named or anonymous |
| Usage Before Definition     | Allowed            | Not allowed         |

---

## Anonymous Functions
An **anonymous function** is a function without a name. These are often used in places where functions are used as arguments.

#### Example:
```javascript
// Used as a callback
setTimeout(function() {
    console.log("Hello after 2 seconds");
}, 2000);
```

---

## First-Class Functions
A **first-class function** means that functions in JavaScript can be:
- Assigned to variables.
- Passed as arguments to other functions.
- Returned from other functions.

This property is what makes JavaScript functions first-class citizens.

#### Example:
```javascript
// Assigning a function
const add = function(a, b) {
    return a + b;
};

// Passing as arguments
function calculate(a, b, operation) {
    return operation(a, b);
}

console.log(calculate(5, 3, add)); // Output: 8

// Returning functions
function greet(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    };
}

const greetSanju = greet("Sanju");
greetSanju(); // Output: Hello, Sanju!
```

---

## Function Parameters vs. Function Arguments
- **Parameters**: Variables listed in the function definition.
- **Arguments**: Actual values passed to the function when it is called.

#### Example:
```javascript
function add(a, b) { // `a` and `b` are parameters
    return a + b;
}

console.log(add(5, 3)); // `5` and `3` are arguments
```

---

## Arrow Functions
Arrow functions are a shorthand for writing functions in JavaScript. They are anonymous by default and do not have their own `this` context.

### Syntax:
```javascript
const add = (a, b) => a + b;
```

### Key Features:
1. **Concise Syntax**:
   ```javascript
   const greet = (name) => `Hello, ${name}`;
   console.log(greet("Sanju")); // Output: Hello, Sanju
   ```

2. **No `this` Context**:
   Arrow functions inherit `this` from their surrounding context.
   ```javascript
   const person = {
       name: "Sanju",
       greet: () => {
           console.log(`Hello, ${this.name}`); // `this.name` is undefined
       },
   };

   person.greet(); // Output: Hello, undefined
   ```

3. **Implicit Return**:
   If the function body has only one expression, it can be returned directly without using the `return` keyword.
   ```javascript
   const square = x => x * x;
   console.log(square(4)); // Output: 16
   ```

---

## Summary Table

| Feature                  | Function Declaration      | Function Expression        | Arrow Function              |
|--------------------------|---------------------------|----------------------------|-----------------------------|
| Hoisted                  | Yes                      | No                         | No                          |
| Syntax                   | `function foo() {}`      | `const foo = function() {}`| `const foo = () => {}`      |
| Context (`this`)         | Dynamic                  | Dynamic                    | Lexical (inherits from parent) |
| Use Case                 | General purpose          | Inline functions           | Short, concise functions    |

---
```
