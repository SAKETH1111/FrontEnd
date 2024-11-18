Event Loop

How JS engine executes the code using call back function

Javascript is a synchronous single threaded language, has 1 call stack and can do one execution at a time. the call stack is present in js engine and all code of js is executed inside this call stack.

first we will put Global execution context in call stack and go through all the line's of code.
If a function call is happening a context is created and added to the call stack.

After exevution will pop out the execution context.

Call stack doesnot have timer.

Web Api's
Browser has features also can say the browser superpowrr

like setTimeout, dom API's, fetch(), LocalStorage, console, Location. All these are made on window key word, but we dont say window.setTimeout() because window is global object.

So these call back function are browser capabilities so we have sepeate queue called call back queue.

So we have event loop which checks for events in call back queue and add into call stack 


When event is added , the callback or task queue is stored and will be sit in web api's environment. when event happens it will be added to call back queue.

Fetch:
Fetch will wait untill promoise is resolved and callback function is called.

Micro task queue

Which has higher priority than Call back queue. Fetch will go into micro task queue.

All the tasks come through promise's & mutation observer come to micro task. 

microtask is empty then only we go to call back queue. this is called starvation 



When call stack is empty, micro task added the call stack then the call back queue

---

To fully understand the JavaScript Event Loop, it’s essential to break it down step by step and include clear explanations with examples.

---

### 1. **JavaScript Engine and Call Stack**
JavaScript is a **single-threaded, synchronous programming language** with **one call stack**. This means it can only execute one task at a time.

- **Call Stack**: A stack data structure where function execution contexts are added (pushed) and removed (popped) in a Last-In-First-Out (LIFO) order.

#### Example:
```javascript
function first() {
  console.log("First function");
}

function second() {
  console.log("Second function");
}

first();
second();
```

**Execution Flow**:
1. `first()` is called, and its execution context is pushed onto the call stack.
2. `console.log("First function")` executes, and the context for `first()` is popped off.
3. `second()` is called, its execution context is pushed, and `console.log("Second function")` executes.
4. Finally, the context for `second()` is popped off.

The call stack now becomes empty.

---

### 2. **Browser APIs (or Web APIs)**
The browser provides additional features outside the JavaScript engine, such as:
- **`setTimeout`** (timers)
- **DOM APIs** (manipulating the webpage)
- **`fetch`** (network requests)
- **`console`**
- **`localStorage`**

These features are not part of the JavaScript engine but are available in the browser environment.

#### Example:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timer callback");
}, 2000);

console.log("End");
```

**Execution Flow**:
1. The `console.log("Start")` is executed in the call stack.
2. `setTimeout` is called, and the browser starts a timer (handled by the Web API environment). The callback is registered to execute after 2 seconds.
3. `console.log("End")` is executed.
4. After 2 seconds, the timer expires. The callback function is placed in the **Callback Queue**.

---

### 3. **Callback Queue and Event Loop**
- **Callback Queue**: A queue where callbacks from asynchronous operations (like `setTimeout`) are added.
- **Event Loop**: Continuously checks the **Call Stack**. If the stack is empty, it pushes the first task from the **Callback Queue** to the call stack for execution.

In the above example:
1. Once the stack is empty (after `console.log("End")`), the event loop moves the `setTimeout` callback into the call stack.
2. The callback (`console.log("Timer callback")`) is executed.

---

### 4. **Microtask Queue**
- Microtasks have **higher priority** than callbacks in the **Callback Queue**.
- Microtasks include:
  - Promises (`.then`, `.catch`)
  - Mutation Observers

Microtasks are processed **before** tasks from the Callback Queue, even if a callback is already in the queue.

#### Example:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timer callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("End");
```

**Execution Flow**:
1. `console.log("Start")` is executed.
2. `setTimeout` is called, and its callback is added to the Callback Queue.
3. `Promise.resolve().then()` creates a microtask and adds it to the **Microtask Queue**.
4. `console.log("End")` is executed.
5. The Event Loop checks the Call Stack, finds it empty, and processes the **Microtask Queue** first.
   - `console.log("Promise resolved")` executes.
6. After the Microtask Queue is empty, the Event Loop processes the Callback Queue.
   - `console.log("Timer callback")` executes.

**Output**:
```
Start
End
Promise resolved
Timer callback
```

---

### 5. **Starvation**
If there are always tasks in the **Microtask Queue**, the **Callback Queue** may never get a chance to execute, causing **starvation**.

#### Example:
```javascript
setTimeout(() => {
  console.log("Callback");
}, 0);

function infiniteMicrotasks() {
  Promise.resolve().then(() => {
    console.log("Microtask");
    infiniteMicrotasks(); // Recursive
  });
}

infiniteMicrotasks();
```

**Execution Flow**:
1. The `setTimeout` callback is added to the Callback Queue.
2. The `infiniteMicrotasks()` continuously adds microtasks to the Microtask Queue.
3. The Microtask Queue never empties, so the `setTimeout` callback is never executed.

**Output**:
```
Microtask
Microtask
Microtask
...
```

---

### 6. **Fetch API and Promises**
When using `fetch`, it returns a **Promise**, which is processed in the **Microtask Queue**.

#### Example:
```javascript
console.log("Start");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log("Fetch Data:", data));

console.log("End");
```

**Execution Flow**:
1. `console.log("Start")` executes.
2. `fetch` is called. The request is handled by the browser, and a promise is returned.
3. `console.log("End")` executes.
4. Once the fetch completes, the `.then` callback is added to the Microtask Queue.
5. The Microtask Queue executes after the stack is empty.

**Output**:
```
Start
End
Fetch Data: { ... } // The data fetched from the API
```

---

### Summary of Execution Priorities:
1. **Call Stack**: Synchronous code executes first.
2. **Microtask Queue**: Higher priority than the Callback Queue. Includes Promises and Mutation Observers.
3. **Callback Queue**: Lower priority, includes tasks from `setTimeout`, `setInterval`, etc.
4. **Event Loop**: Ensures tasks are executed when the Call Stack is empty.

By understanding these principles, you can manage asynchronous operations in JavaScript effectively!

