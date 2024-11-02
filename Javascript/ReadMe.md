**Namaste JavaScript**

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

