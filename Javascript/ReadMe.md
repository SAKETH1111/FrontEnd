# JavaScript Documentation for Easy Learning



Here’s a detailed explanation of execution context in JavaScript, how it works, and the concepts of memory and code components.
--

## Execution Context in JavaScript

In JavaScript, everything happens within an execution context. This is the environment where JavaScript code is evaluated and executed. When JavaScript code runs, the JavaScript engine creates an execution context to keep track of variables and functions and to manage the flow of code execution.

### 1. What is Execution Context?
An execution context is the wrapper that helps the JavaScript engine keep track of everything happening in the code. Every time a function is called, a new execution context is created, allowing for isolated scopes.

### 2. Components of Execution Context
The execution context consists of two main components:

Memory Component (Variable Environment)
Code Component (Thread of Execution)
### 3. Memory Component (Variable Environment)
The memory component of the execution context, also known as the variable environment, is where variables and functions are stored in a key-value format. During the creation phase, JavaScript allocates memory for variables and functions in this environment.

Variables are assigned undefined initially.
Functions are stored with their entire definitions.

**EP-01**

1. Everything in JavaScript happen inside an **execution context**.
2. Execution context has 2 components.
3. One is a memory component called variable environment which stores variables, functions in key value form.
4. Second is a code component called **Thread of execution** which runs line by line.
5. JavaScript is a synchronous single threaded langauge. That means it runs one line by line, it means after finishing one line it goes to the other.

**EP-02**

What happends when you run a JavaScript Code?
```
var n =2;
function square(int n){ // n is called parameter
var ans = n*n;
retunr ans;

}
var square2 = square(n); // here n is called arguments
var square4 = square(4);
```


1. First a global exectuion context is created with memory and code component.
2. The execution context is created in two phases. This happen in two phase first is memory creation phase and then code execution phase.
3. The code execution happens line by line so memory is alocated in that way.
- In the above code n is saved as undefined, then sqaure function is saved and square2 & square4 are saved has undefined in memory first.
4. after javascript is done by memory allocation then runs the code execution.
5. now it allocates the values to the undefined with the values we get in code execution.
6. so when a function is runned or invoked a new execution context is created. so the new context has again memory and code component. Same process is continued. execution context will be deleted after it is done.

SO all these is managed by call stack by global execution context. so it pushes new execution context and after it finished it is pops out.

Remeber : Call stack maintains the order of execution of execution contexts.

**Ep-03** Hoisting in JS
```
getName();
console.log(x);
x=7;
function getName(){
console.log("Hello");
}
Output:
Hello
Undefined
```

Hoisting as a core concept relies on the way how Execution Context is created. In the first phase i.e. the Memory Allocation Phase all the variables and functions are allocated memory, even before any code is executed. All the variables are assigned undefined at this point in time in the local memory.

Hosisting in js is you can access variables and function even before initialising it. functions can call it but variable will be undefined.

undefined means it has allocated in the memory but not initialised by the variable.
not defined measn not allocated in memory.

Arrow functuons are treated has variable.

You can see call stack in inspect scope.

**Ep-04** EP-04 | How functions work in JS ❤️ & Variable Environment


Understand how Functions work behind the scenes in JavaScript.What happens when a function is executed/invoked inside the JS Engine. This video covers an in-depth analysis of function execution and its variable environments.

Whenever a function is invoked in JavaScript a functional Execution Context is created and memory is allocated. Once the memory is allocated to the variables and functions, then the code is executed synchronously, one line at a time. Let's check all that with examples in the video.


**EP-05 | SHORTEST JS Program 🔥window & this keyword**

Let's check out the Shortest Program in JavaScript and more about the window and this keyword. Understand how the Global Execution Context is created, global object, and this keyword is created in JS. We'll also talk about what happens under the hood of the JS Engine when you execute this shortest code in the browser.

JavaScript Engine creates a global object whenever you run any JS code. In the case of browsers, this global object is known as window, check out the video to see the demo of this global object created by the browser.
  
Shortest js porgram is empty file.
JS will still create global execution context and memory space. it will also create `window`

this will point to the window object.

window is a global object created in the global context

In chrome js engingine is called v8
in case of browser it is know has window

this === window is true in global context

anything not inside function is global function.
**EP-06 | undefined vs not defined in JS 🤔**

JS is a loosely typed language (weakly typed language). This video covers an in-depth analysis of the undefined keyword and mistakes you should avoid while using this keyword. It is a special keyword in JS and it acts as a placeholder for variables until they are assigned any value in them.

Understand the difference between undefined and not defined in JS. Many developers assume that undefined is exactly the same as not defined, but that's not true. undefined is a value in JavaScript and in fact, it also takes up memory space. So watch this video to understand everything in deep.

undefined means it has allocated in the memory but not initialised by the variable.
not defined measn not allocated in memory.

**EP-07 | The Scope Chain, 🔥Scope & Lexical Environment**

Diving deep into Scope, Lexical Environment, and The Scope Chain in JavaScript with a lot of code examples and visuals. This is a HOT interview topic and this video cover everything that happens under the hood. The video is a little long but I REQUEST YOU to watch it fully, this concept will help us in later videos. 🙏

Along with Code Examples, I've shown all these concepts visually so that it helps you better understand. And not only these, but I also covered a proper demo of Scope and The Scope chain in Browser. That's amazing, do watch it. You'll definitely fall in love with The Scope Chain in JS. ❤️

Scope is where you can acess the variable or function.

lexical environmental is a local memory with reference to lexical environment of parent.
Global environment points to null it does not have a parent.

**EP-08 | let & const in JS 🔥Temporal Dead Zone**

let & const in JavaScript behave differently when they are Hoisted. Understanding the difference between var, let and const in JS will help you write better code. const and let are in a Temporal Dead Zone until they are initialized some value. You might encounter SyntaxError, TypeError or ReferenceError while using them in your code.

This JavaScript tutorial video covers everything in depth about how let and const are hoisted and how let in js is different from var and const in JS. We will also see what happens behind the scenes in the browser when you use them in code. Another exciting part of the video is the explanation of the difference between Syntax Error, Reference Error, and Type Error in JavaScript.

**Variable Declarations in JavaScript: var, let, and const**
JavaScript provides three ways to declare variables: var, let, and const. Each has unique characteristics regarding scope, hoisting, reassignment, and the Temporal Dead Zone. Let's explore these differences with examples.

**1. var Declaration**
**Scope:** var is function-scoped. Variables declared with var are accessible within the function they're declared in or globally if declared outside of a function.
**Hoisting:** var declarations are hoisted to the top of their scope, meaning the variable can be used before its declaration.
**Global Object Attachment:** When declared globally, var attaches to the global window object (in the browser).
**Reassignment:** You can redeclare a var variable multiple times without errors.
**javascript**
```
console.log(a); // Output: undefined (hoisted)
var a = 10;
console.log(a); // Output: 10

// Redeclaration is allowed
var b = 20;
var b = 30;
console.log(b); // Output: 30
```

**2. let Declaration**
**Scope:** let is block-scoped, which means it is only accessible within the block (e.g., within curly braces {}) where it’s defined.
**Hoisting:** let is hoisted but does not initialize to undefined. Instead, it enters a "Temporal Dead Zone" (TDZ) from the start of the block until the variable is declared.
**Global Object Attachment:** When declared globally, let does not attach to the window object.
**Temporal Dead Zone:** You cannot access a let variable before its declaration in the code, or it will throw a ReferenceError.
**Reassignment:** Redeclaring a let variable in the same scope results in a SyntaxError.
**javascript**
```
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;

// Redeclaration not allowed in the same scope
let y = 20;
let y = 30; // SyntaxError: Identifier 'y' has already been declared

```
**3. const Declaration**
**Scope:** Like let, const is also block-scoped.
**Hoisting:** const is hoisted but has a Temporal Dead Zone, similar to let.
**Reassignment:** Variables declared with const cannot be reassigned after their initial assignment, and they must be initialized at the time of declaration. Attempting to reassign a const variable will throw a TypeError.
**Global Object Attachment:** Like let, const does not attach to the window object when declared globally.
**javascript**
```
console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 10;

z = 20; // TypeError: Assignment to constant variable

// Declaration without initialization is not allowed
const w; // SyntaxError: Missing initializer in const declaration
```

**EP-09 | BLOCK SCOPE & Shadowing in JS 🔥**

Let & const Block Scope in-depth tutorial covers what is a Block, Scope, and Block Scope in JavaScript. With live code examples and detailed explanations, we also will see what is Shadowing in JavaScript. We also talk about Illegal Shadowing and how different variable declarations using var, let and const behave differently when initialized in the Block Scope.

Block Scope has a lexical behavior and also follows rules of the Lexical Scope chain. This video covers everything that happens under the hood. The video is a little long but I REQUEST YOU to watch it fully, this concept will help us in later videos. 🙏

Block - We group multiple statements together where js expects only 1 statement.
like in if(true) {
....
....
}

let & const are block store because they are stored in block instaed of global and cannot be accessed out of the block.

Shadowing in js - var, let is shadowed when redeclared inside other block.

if not global then script for let and var, in block it is block scope.

Shadowing will also behave in function also.

Illegal shadowing - if you do let using var.
function and arrow function has same scope

**EP-10 | Closures in JS 🔥**

a function bined with the lexical scope bundle environment is closure
you can return a function
It remebers lexical scope with function that is returned.

**EP-11 | setTimeout + Closures Interview Question 🔥**

This question will strengthen your knowledge and understanding of Closures and will also help you in your frontend/full stack/ web development interview. We will start with an easy JS question and slowly move to the hard and tricky interview question.

If you are giving web developer interviews actively, there are high chances that you might find this question in your frotend developer interview. Candidates have faced this question in their interviews for Amazon, Facebook, Paypal, Microsoft and many other big tech firms.
