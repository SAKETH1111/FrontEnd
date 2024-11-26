Here’s an in-depth explanation and notes on **Callback Hell**, **Inversion of Control**, and how JavaScript's asynchronous nature interacts with its single-threaded architecture.

---

## 1. **JavaScript’s Nature: Synchronous and Single-Threaded**

- JavaScript is a **single-threaded language**, meaning it can execute **one task at a time** on the **call stack**.
- **Synchronous Execution**: Each task is completed before moving to the next.
- **Asynchronous Programming** allows tasks to be delegated (e.g., fetching data from an API), preventing the main thread from blocking.

---

## 2. **What are Callbacks?**

- A **callback** is a function passed as an argument to another function to be executed later.
- Callbacks are a common way to handle asynchronous operations like:
  - Fetching data.
  - Reading files.
  - Setting timers.

### Example:
```javascript
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 1000);
}

function processData() {
  console.log("Processing data");
}

fetchData(processData);
```

---

## 3. **The Problem: Callback Hell**

**Callback Hell** occurs when multiple asynchronous operations are nested, leading to deeply indented and difficult-to-read code. This is also called the **"Pyramid of Doom"**.

### Example of Callback Hell:
```javascript
function getUserData(userId, callback) {
  setTimeout(() => {
    console.log("Fetched user data");
    callback();
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    console.log("Fetched posts for user");
    callback();
  }, 1000);
}

function getComments(postId, callback) {
  setTimeout(() => {
    console.log("Fetched comments for post");
    callback();
  }, 1000);
}

getUserData(1, () => {
  getPosts(1, () => {
    getComments(101, () => {
      console.log("Done!");
    });
  });
});
```

### Why is it a Problem?
1. **Readability**: Code becomes deeply nested and hard to understand.
2. **Debugging**: Difficult to pinpoint errors in deeply nested callbacks.
3. **Maintenance**: Adding or modifying logic becomes error-prone.

---

## 4. **Inversion of Control**

**Inversion of Control** refers to losing control of your code flow when passing a callback to a third-party function.

### Key Issues:
1. **Lack of Guarantees**: The third-party function decides when to call your callback (or if it will call it at all).
2. **Error Handling**: If the third-party function fails, it might not inform your code.
3. **Unintended Behavior**: You rely on the implementation details of external code, which may lead to unpredictable results.

### Example:
```javascript
function unreliableThirdParty(callback) {
  setTimeout(() => {
    console.log("Third-party operation started");
    // Forgetting to call the callback
  }, 1000);
}

unreliableThirdParty(() => {
  console.log("Callback executed");
});
```

- Here, the callback is never executed, and you lose control of what happens after the third-party operation.

---

## 5. **How to Solve Callback Hell and Inversion of Control?**

### Solution 1: Named Functions
Instead of nesting anonymous functions, use **named functions** to flatten the structure.

#### Refactored Code:
```javascript
function getUserData(userId, callback) {
  setTimeout(() => {
    console.log("Fetched user data");
    callback();
  }, 1000);
}

function getPostsCallback() {
  getPosts(1, getCommentsCallback);
}

function getCommentsCallback() {
  getComments(101, () => {
    console.log("Done!");
  });
}

getUserData(1, getPostsCallback);
```

### Solution 2: Promises
Promises provide a better way to manage asynchronous code by:
- Chaining operations with `.then()`.
- Handling errors with `.catch()`.

#### Using Promises:
```javascript
function getUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched user data");
      resolve(userId);
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched posts for user");
      resolve(101); // Post ID
    }, 1000);
  });
}

function getComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched comments for post");
      resolve();
    }, 1000);
  });
}

getUserData(1)
  .then((userId) => getPosts(userId))
  .then((postId) => getComments(postId))
  .then(() => console.log("Done!"))
  .catch((err) => console.error(err));
```

### Solution 3: Async/Await
`async/await` syntax simplifies handling of asynchronous code, making it look like synchronous code.

#### Using Async/Await:
```javascript
async function fetchAllData() {
  const userId = await getUserData(1);
  const postId = await getPosts(userId);
  await getComments(postId);
  console.log("Done!");
}

fetchAllData().catch((err) => console.error(err));
```

---

## 6. **Good Parts of Callbacks**

Despite their issues, callbacks are:
- **Simple** to understand for basic asynchronous tasks.
- A **building block** for more advanced asynchronous patterns like Promises and Async/Await.

---

## 7. **Bad Parts of Callbacks**

- **Callback Hell**: Leads to unreadable and unmaintainable code.
- **Inversion of Control**: Loss of control over your code's flow and behavior.
- **Error Propagation**: Difficult to manage and propagate errors.

---

## 8. **Key Takeaways**

1. **Callback Hell**:
   - Happens when nested callbacks make code unreadable.
   - Leads to poor debugging and maintenance challenges.
   - Solution: Use named functions, Promises, or Async/Await.

2. **Inversion of Control**:
   - Occurs when you pass control of your callback to third-party code.
   - Leads to unpredictability and poor error handling.
   - Solution: Use Promises or async/await to regain control.

3. **JavaScript’s Asynchronous Nature**:
   - JavaScript’s single-threaded nature requires asynchronous patterns to avoid blocking.
   - The **Event Loop** plays a critical role in managing async operations.

---

## 9. **Final Example: Solving Callback Hell with Async/Await**
```javascript
function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User data fetched"), 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Posts fetched"), 1000);
  });
}

function fetchComments() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Comments fetched"), 1000);
  });
}

async function fetchData() {
  const userData = await fetchUserData();
  console.log(userData);

  const posts = await fetchPosts();
  console.log(posts);

  const comments = await fetchComments();
  console.log(comments);

  console.log("All tasks done!");
}

fetchData().catch((err) => console.error(err));
```

---

By leveraging modern JavaScript features like Promises and `async/await`, you can write cleaner, more maintainable asynchronous code while avoiding **callback hell** and **inversion of control**. Let me know if you need more examples or further clarification!

---

Here’s a comprehensive explanation and detailed notes on **Promises** in JavaScript, including their usage, how they solve issues like callback hell and inversion of control, and key concepts like promise chaining, `then()`, `catch()`, and `finally()`.

---

## **What are Promises?**

A **Promise** in JavaScript represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It is a placeholder for a value that may not be available yet but will be resolved in the future.

### Key Characteristics of Promises:
1. Promises help manage **asynchronous operations**.
2. They solve the problems of **callback hell** and **inversion of control** by giving us structured and predictable code flow.
3. A promise:
   - Starts in the `pending` state.
   - Transitions to either:
     - `fulfilled` (when the operation is successful), or
     - `rejected` (when the operation fails).

---

## **Why Use Promises?**

Before Promises, we used **callbacks** for asynchronous operations, which had two major problems:
1. **Callback Hell**: Deeply nested and hard-to-read code.
2. **Inversion of Control**: Handing over control of your code to third-party functions, which might behave unpredictably.

Promises solve these problems by providing a cleaner way to manage asynchronous code.

---

## **Creating a Promise**

A Promise is created using the **`Promise` constructor**. It takes a function as an argument, which receives two parameters:
- **`resolve`**: Call this when the operation is successful.
- **`reject`**: Call this when the operation fails.

### Syntax:
```javascript
const promise = new Promise((resolve, reject) => {
  // Perform an async operation
  if (/* success condition */) {
    resolve("Success");
  } else {
    reject("Failure");
  }
});
```

---

## **How Promises Work**

1. A Promise object is **immutable**: Once its state is changed, it cannot be modified.
2. Initial state:
   - **`pending`**: The promise has not been resolved or rejected yet.
3. Final states:
   - **`fulfilled`**: The promise successfully completed, and `resolve()` was called.
   - **`rejected`**: The promise failed, and `reject()` was called.

---

## **Using Promises**

### 1. **Handling Results with `.then()`**
- `.then()` is used to handle the **fulfilled** state of a promise.
- It takes a callback function that receives the resolved value of the promise.

#### Example:
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data fetched!"), 1000);
});

promise.then((result) => {
  console.log(result); // Output: Data fetched!
});
```

---

### 2. **Handling Errors with `.catch()`**
- `.catch()` is used to handle the **rejected** state of a promise.
- It takes a callback function that receives the reason for rejection.

#### Example:
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject("Failed to fetch data"), 1000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error); // Output: Failed to fetch data
  });
```

---

### 3. **Executing Code Regardless of Outcome with `.finally()`**
- `.finally()` is called after the promise is settled (either fulfilled or rejected).
- It does not receive the promise’s result or error.

#### Example:
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Task completed"), 1000);
});

promise
  .then((result) => console.log(result)) // Output: Task completed
  .catch((error) => console.error(error))
  .finally(() => console.log("Operation finished")); // Output: Operation finished
```

---

## **Promise Chaining**

Promise chaining allows us to perform multiple asynchronous operations in sequence. Each `.then()` in the chain returns a promise, which can be used by the next `.then()`.

### Rules of Chaining:
1. Always **return** a value or another promise in `.then()` to pass it to the next `.then()`.
2. `.catch()` handles errors from **all previous promises** in the chain, but it only works for failures **above it**.

#### Example of Chaining:
```javascript
const fetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "John" }), 1000);
  });
};

const fetchPosts = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post1", "Post2"]), 1000);
  });
};

fetchUser()
  .then((user) => {
    console.log(user); // Output: { id: 1, name: "John" }
    return fetchPosts(user.id); // Returning a new promise
  })
  .then((posts) => {
    console.log(posts); // Output: ["Post1", "Post2"]
  })
  .catch((error) => {
    console.error(error); // Handles errors in the chain
  });
```

---

## **Important Concepts**

### 1. **Promise States**
- **Pending**: The initial state when the promise is created.
- **Fulfilled**: When `resolve()` is called, and the promise is completed successfully.
- **Rejected**: When `reject()` is called, and the promise fails.

---

### 2. **Promise Example with `resolve` and `reject`**
```javascript
function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (cart.length > 0) {
      resolve("Order created successfully");
    } else {
      reject("Cart is empty");
    }
  });
}

createOrder(["item1", "item2"])
  .then((message) => console.log(message)) // Output: Order created successfully
  .catch((error) => console.error(error)); // Not executed
```

---

### 3. **Using `.catch()` in Chains**
- `.catch()` only handles errors from **above** in the chain. If an error occurs **below**, it won’t catch it.

#### Example:
```javascript
fetchUser()
  .then((user) => {
    throw new Error("Failed to fetch posts"); // Simulating an error
    return fetchPosts(user.id);
  })
  .catch((error) => {
    console.error(error.message); // Output: Failed to fetch posts
  })
  .then(() => {
    console.log("This will still execute if no error occurs above.");
  });
```

---

## **How Promises Improve Code**

### Solving Callback Hell:
With promises, asynchronous code is more readable and maintainable:
```javascript
// Callback Hell
asyncOperation1(() => {
  asyncOperation2(() => {
    asyncOperation3(() => {
      console.log("Done!");
    });
  });
});

// With Promises
asyncOperation1()
  .then(() => asyncOperation2())
  .then(() => asyncOperation3())
  .then(() => console.log("Done!"))
  .catch((error) => console.error(error));
```

---

## **Common Mistakes**

1. **Forgetting to Return in `.then()`**:
   ```javascript
   fetchUser()
     .then((user) => {
       fetchPosts(user.id); // Missing return
     })
     .then((posts) => console.log(posts)); // Won't work as intended
   ```

   **Fix**:
   ```javascript
   fetchUser()
     .then((user) => {
       return fetchPosts(user.id); // Return the promise
     })
     .then((posts) => console.log(posts));
   ```

2. **Not Handling Rejections**:
   - Always use `.catch()` to handle errors.
   - Unhandled rejections can crash your program in strict environments.

---

## **Summary**

- A **Promise** is a placeholder for a future value, representing the result of an asynchronous operation.
- **States**: `pending`, `fulfilled`, `rejected`.
- **Key Methods**:
  - `.then()`: Handle fulfillment.
  - `.catch()`: Handle rejection.
  - `.finally()`: Execute code regardless of outcome.
- **Promise Chaining** allows sequential async operations.
- Promises solve **callback hell** and **inversion of control**, making code more readable and manageable.

---

These notes provide a deep understanding of promises. Let me know if you'd like further clarification or examples! 😊

---


Here’s a comprehensive explanation of **`async/await`**, including how it works, its behavior, examples with multiple timeouts, and how to handle errors effectively.

---

## **What is `async/await`?**

### **`async` Functions**
- An `async` function is a special type of function that **always returns a promise**.
- If the function explicitly returns a promise, it resolves to that promise.
- If it returns a non-promise value, the value is **wrapped in a resolved promise** automatically.

#### Example:
```javascript
async function getData() {
  return "Hello"; // Non-promise value
}

getData().then((data) => console.log(data)); // Output: Hello
```

- The returned promise will either resolve with the function’s return value or reject if an error is thrown.

---

### **`await` Keyword**
- The `await` keyword is used **inside `async` functions** to pause the execution of the function until the promise is resolved.
- The result of the awaited promise is assigned to a variable, or the execution continues after the `await`.

#### Key Points:
1. The program **"waits"** for the promise to resolve at the `await` keyword.
2. While waiting, the **call stack is not blocked**. JavaScript can continue executing other code (non-blocking).
3. If the promise is already resolved, `await` skips the waiting and continues execution immediately.

---

### **Why `async/await`?**
1. It simplifies working with promises by making asynchronous code look synchronous.
2. It avoids **promise chaining** and makes code more readable.

#### Example: Before `async/await`
```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

#### With `async/await`:
```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

fetchData();
```

---

## **Key Behavior of `async/await`**

1. **Returns a Promise Always**:
   - An `async` function **implicitly wraps its return value in a promise**.
   ```javascript
   async function test() {
     return 42; // Automatically becomes Promise.resolve(42)
   }
   test().then((value) => console.log(value)); // Output: 42
   ```

2. **Await Suspends Execution**:
   - When `await` is used, the execution of the `async` function pauses until the awaited promise resolves.
   - **The call stack is not blocked** during this pause.

---

## **Examples with Multiple Promises**

### Example 1: Sequential Execution of Promises
```javascript
async function handlePromises() {
  console.log("Start");

  const result1 = await new Promise((resolve) =>
    setTimeout(() => resolve("Promise 1 resolved"), 2000)
  );
  console.log(result1); // Output after 2 seconds: Promise 1 resolved

  const result2 = await new Promise((resolve) =>
    setTimeout(() => resolve("Promise 2 resolved"), 1000)
  );
  console.log(result2); // Output after 3 seconds: Promise 2 resolved

  console.log("End");
}

handlePromises();
// Output:
// Start
// (After 2 seconds): Promise 1 resolved
// (After 1 more second): Promise 2 resolved
// End
```

---

### Example 2: Concurrent Execution with `Promise.all`
- Instead of waiting for each promise sequentially, you can execute them concurrently using `Promise.all`.

```javascript
async function handleConcurrentPromises() {
  console.log("Start");

  const promises = [
    new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 2000)),
    new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 1000)),
    new Promise((resolve) => setTimeout(() => resolve("Promise 3"), 1500)),
  ];

  const results = await Promise.all(promises);
  console.log(results); // Output after 2 seconds: ["Promise 1", "Promise 2", "Promise 3"]

  console.log("End");
}

handleConcurrentPromises();
```

---

## **Using `fetch` with `async/await`**

- **`fetch`** is a built-in browser function that returns a promise.
- The returned promise resolves to a **response object**, which represents the HTTP response.
- To get the actual data, you must call `.json()`, which itself returns a promise.

### Example:
```javascript
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json(); // Parsing JSON data
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
// Output:
// { userId: 1, id: 1, title: "Sample Title", body: "Sample Body" }
```

---

## **Error Handling in `async/await`**

### 1. Using `try-catch`:
- Errors inside an `async` function can be caught using `try-catch`.

#### Example:
```javascript
async function fetchDataWithErrorHandling() {
  try {
    const response = await fetch("https://invalid-url.example.com");
    const data = await response.json(); // This will fail for an invalid URL
    console.log(data);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

fetchDataWithErrorHandling();
// Output: Error occurred: Failed to fetch
```

---

### 2. Using `.catch()`:
- Since `async` functions return promises, you can use `.catch()` to handle errors.

#### Example:
```javascript
async function fetchData() {
  const response = await fetch("https://invalid-url.example.com");
  const data = await response.json();
  return data;
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error("Error occurred:", error.message));
// Output: Error occurred: Failed to fetch
```

---

## **Comparison of `await` and Normal Promises**

### Sequential Execution with `await`:
```javascript
async function sequentialExecution() {
  const result1 = await new Promise((resolve) =>
    setTimeout(() => resolve("Result 1"), 2000)
  );
  console.log(result1); // After 2 seconds

  const result2 = await new Promise((resolve) =>
    setTimeout(() => resolve("Result 2"), 1000)
  );
  console.log(result2); // After 3 seconds total
}

sequentialExecution();
```

### Concurrent Execution with `Promise.all`:
```javascript
async function concurrentExecution() {
  const promises = [
    new Promise((resolve) => setTimeout(() => resolve("Result 1"), 2000)),
    new Promise((resolve) => setTimeout(() => resolve("Result 2"), 1000)),
  ];

  const results = await Promise.all(promises);
  console.log(results); // After 2 seconds: ["Result 1", "Result 2"]
}

concurrentExecution();
```

---

## **Key Takeaways**

1. **`async` Functions**:
   - Always return a promise, even if they don’t explicitly return one.
   - Simplify working with promises by making the code look synchronous.

2. **`await`**:
   - Pauses the execution of the `async` function until the promise resolves.
   - Only works inside `async` functions.

3. **Error Handling**:
   - Use `try-catch` for synchronous-style error handling.
   - `.catch()` can still be used as an alternative for handling rejections.

4. **Performance Considerations**:
   - Use `await` for sequential operations that depend on each other.
   - Use `Promise.all` for concurrent operations that don’t depend on each other.

5. **Readable Streams in `fetch`**:
   - `fetch()` returns a promise resolving to a response object.
   - Use `.json()` or `.text()` to parse the response body.

---

By mastering `async/await`, you can write clean, readable, and efficient asynchronous code while avoiding callback hell and complex promise chaining. Let me know if you need further clarification or examples!

---
Your observation about the example is correct. The `await` keyword pauses the execution of the `async` function until the promise resolves. In the provided code, **the promises are executed sequentially**, not concurrently, so the second promise (`result2`) will only start after the first promise (`result1`) resolves.

### Explanation of Execution:

1. **Promise 1 (`result1`)**:
   - The `await` pauses the execution of the function for 2 seconds until this promise resolves.
   - After 2 seconds, `"Promise 1 resolved"` is logged.

2. **Promise 2 (`result2`)**:
   - The second `await` pauses the execution for 1 additional second after `result1` is resolved.
   - After 1 second (a total of 3 seconds from the start), `"Promise 2 resolved"` is logged.

3. **"End"**:
   - This is logged after all the `await` calls have been completed.

---

### Correct Output for the Given Code:

```plaintext
Start
Promise 1 resolved    <-- After 2 seconds
Promise 2 resolved    <-- After 3 seconds total (1 more second after result1)
End
```

---

### If You Want Both Promises to Resolve Concurrently

If your intention is to execute both promises **concurrently** (at the same time), you can use **`Promise.all`** or initiate both promises before awaiting them.

#### Using `Promise.all`:
```javascript
async function handlePromises() {
  console.log("Start");

  const [result1, result2] = await Promise.all([
    new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), 2000)),
    new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), 1000)),
  ]);

  console.log(result1); // Output after 2 seconds: Promise 1 resolved
  console.log(result2); // Output after 2 seconds: Promise 2 resolved

  console.log("End");
}

handlePromises();
```

#### Output for Concurrent Execution:
```plaintext
Start
Promise 1 resolved    <-- After 2 seconds
Promise 2 resolved    <-- After 2 seconds
End
```

#### Without `Promise.all` but Concurrently Started:
```javascript
async function handlePromises() {
  console.log("Start");

  const promise1 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 1 resolved"), 2000)
  );

  const promise2 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 2 resolved"), 1000)
  );

  const result1 = await promise1;
  console.log(result1); // Output after 2 seconds: Promise 1 resolved

  const result2 = await promise2;
  console.log(result2); // Output after 2 seconds: Promise 2 resolved

  console.log("End");
}

handlePromises();
```

#### Output for Concurrent Execution (Sequential Logging):
```plaintext
Start
Promise 1 resolved    <-- After 2 seconds
Promise 2 resolved    <-- After 2 seconds
End
```

---

### Key Takeaways:

- The original code **executes sequentially** because the second promise (`result2`) only starts after the first one (`result1`) resolves.
- To make the promises execute **concurrently**, either use `Promise.all` or create both promises upfront before `await`. This will allow both timers to run in parallel.
---
Here’s an in-depth explanation of the **Promise APIs** in JavaScript, including **`Promise.all`**, **`Promise.allSettled`**, **`Promise.race`**, and **`Promise.any`**, with detailed examples and behavior descriptions.

---

## **Why Use Promise APIs?**

When working with multiple asynchronous operations (like API calls or other promises), we often need:
1. To wait for **all of them** to complete.
2. To find out which **settles first**.
3. To handle **both successes and failures** efficiently.

Promise APIs help manage these scenarios in a structured way.

---

## **1. `Promise.all()`**

- **Purpose**: Wait for **all promises** in an iterable (like an array) to resolve. It returns a single promise that resolves with an array of results.
- **Behavior**:
  - If **all promises resolve**, `Promise.all` resolves with an array of their results.
  - If **any promise rejects**, `Promise.all` rejects immediately with that error, and no other results are returned.

### Syntax:
```javascript
Promise.all([promise1, promise2, promise3])
  .then((results) => console.log(results)) // Array of resolved values
  .catch((error) => console.error(error)); // The first rejection
```

### Example:
```javascript
const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), 2000));
const promise3 = new Promise((_, reject) => setTimeout(() => reject("Promise 3 rejected"), 1500));

Promise.all([promise1, promise2, promise3])
  .then((results) => console.log("Results:", results))
  .catch((error) => console.error("Error:", error));
```

**Output**:
```
Error: Promise 3 rejected
```

> **Key Point**: The first rejection stops all remaining promises from being processed further.

---

## **2. `Promise.allSettled()`**

- **Purpose**: Wait for **all promises** to settle (either resolve or reject). It provides an array of objects describing the outcome (`status: "fulfilled"` or `"rejected"`) of each promise.
- **Behavior**:
  - Does not short-circuit if any promise rejects.
  - Returns the results of **all promises**, regardless of success or failure.

### Syntax:
```javascript
Promise.allSettled([promise1, promise2, promise3])
  .then((results) => console.log(results)); // Array of {status, value/reason}
```

### Example:
```javascript
const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), 1000));
const promise2 = new Promise((_, reject) => setTimeout(() => reject("Promise 2 rejected"), 1500));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3 resolved"), 2000));

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => console.log("Settled Results:", results));
```

**Output**:
```json
[
  { status: "fulfilled", value: "Promise 1 resolved" },
  { status: "rejected", reason: "Promise 2 rejected" },
  { status: "fulfilled", value: "Promise 3 resolved" }
]
```

> **Key Point**: `Promise.allSettled()` ensures you always know the result of every promise, regardless of success or failure.

---

## **3. `Promise.race()`**

- **Purpose**: Wait for the **first promise** to settle (either resolve or reject) and returns its result/error.
- **Behavior**:
  - Resolves or rejects as soon as the first promise settles (not necessarily successfully).
  - Ignores the state of remaining promises once one settles.

### Syntax:
```javascript
Promise.race([promise1, promise2, promise3])
  .then((result) => console.log("First settled result:", result))
  .catch((error) => console.error("First settled error:", error));
```

### Example:
```javascript
const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), 1000));
const promise2 = new Promise((_, reject) => setTimeout(() => reject("Promise 2 rejected"), 500));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3 resolved"), 2000));

Promise.race([promise1, promise2, promise3])
  .then((result) => console.log("First result:", result))
  .catch((error) => console.error("First error:", error));
```

**Output**:
```
First error: Promise 2 rejected
```

> **Key Point**: `Promise.race()` is useful for tasks where you only care about the fastest promise, such as setting a timeout for an operation.

---

## **4. `Promise.any()`**

- **Purpose**: Wait for the **first promise to fulfill**. If all promises reject, it rejects with an **`AggregateError`** (an error object representing all rejection reasons).
- **Behavior**:
  - Resolves as soon as the **first successful promise** is resolved.
  - If **all promises reject**, it rejects with an `AggregateError`.

### Syntax:
```javascript
Promise.any([promise1, promise2, promise3])
  .then((result) => console.log("First successful result:", result))
  .catch((error) => console.error("All promises failed:", error));
```

### Example:
```javascript
const promise1 = new Promise((_, reject) => setTimeout(() => reject("Promise 1 rejected"), 1000));
const promise2 = new Promise((_, reject) => setTimeout(() => reject("Promise 2 rejected"), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3 resolved"), 1500));

Promise.any([promise1, promise2, promise3])
  .then((result) => console.log("First success:", result))
  .catch((error) => console.error("Error:", error.errors));
```

**Output**:
```
First success: Promise 3 resolved
```

#### Example with All Rejected Promises:
```javascript
const promise1 = new Promise((_, reject) => setTimeout(() => reject("Promise 1 rejected"), 1000));
const promise2 = new Promise((_, reject) => setTimeout(() => reject("Promise 2 rejected"), 2000));

Promise.any([promise1, promise2])
  .then((result) => console.log("First success:", result))
  .catch((error) => console.error("Error:", error.errors));
```

**Output**:
```
Error: ["Promise 1 rejected", "Promise 2 rejected"]
```

> **Key Point**: `Promise.any()` is useful when you care only about the first successful result and can tolerate failures.

---

## **Comparison of Promise APIs**

| API                  | Resolves When             | Rejects When                              | Use Case                                                                 |
|-----------------------|---------------------------|-------------------------------------------|--------------------------------------------------------------------------|
| **`Promise.all`**     | All promises fulfill      | Any one promise rejects                  | When you need **all results** and fail-fast on errors.                  |
| **`Promise.allSettled`** | All promises settle       | Never rejects; always resolves with all results | When you need to know the outcome of **all promises**, regardless of success or failure. |
| **`Promise.race`**    | First promise settles     | First promise rejects                    | When you need the result of the **fastest promise**.                     |
| **`Promise.any`**     | First promise fulfills    | All promises reject (returns AggregateError) | When you need the **first successful result**, tolerating failures.     |

---

## **Practical Use Cases**

1. **`Promise.all`**:
   - Fetch data from multiple APIs and process it when all are ready.
   ```javascript
   const api1 = fetch("https://api.example.com/data1");
   const api2 = fetch("https://api.example.com/data2");
   const api3 = fetch("https://api.example.com/data3");

   Promise.all([api1, api2, api3])
     .then((responses) => Promise.all(responses.map((res) => res.json())))
     .then((data) => console.log(data))
     .catch((error) => console.error("Error:", error));
   ```

2. **`Promise.allSettled`**:
   - Handle results of multiple API calls, even if some fail.
   ```javascript
   Promise.allSettled([api1, api2, api3])
     .then((results) =>
       results.forEach((result) => {
         if (result.status === "fulfilled") {
           console.log("Data:", result.value);
         } else {
           console.error("Error:", result.reason);
         }
       })
     );
   ```

3. **`Promise.race`**:
   - Set a timeout for an API call.
   ```javascript
   const timeout = new Promise((_, reject) => setTimeout(() => reject("Timeout"), 3000));
   const fetchData = fetch("https://api.example.com/data");

   Promise.race([timeout, fetchData])
     .then((result) => console.log("Result:", result))
     .catch((error) => console.error("Error:", error));
   ```

4. **`Promise.any`**:
   -

 Get the first successful API response from a list of fallback endpoints.
   ```javascript
   Promise.any([
     fetch("https://api.primary.com/data"),
     fetch("https://api.backup1.com/data"),
     fetch("https://api.backup2.com/data"),
   ])
     .then((response) => response.json())
     .then((data) => console.log(data))
     .catch((error) => console.error("All failed:", error.errors));
   ```

---

Let me know if you need further clarification or deeper examples! 😊

---
Promise API's

when we want parallel API calls we use prmoise API's.
1. Promise.all() - it takes array(iterable) of promises, if all are sucessfull. it will wait for all of them to finsih and it will collect and give the result at once.
As soon as any one reject the promise will throw the error. as soon as error happen it will throw the error.it will not wait for other promises. 


Promises.allSettled() it returns which are successful or failuer after we know the status of the prmosies to settled

promise.race() after first promise settled it gives the value of the settle promise. if first promise fails error will be thrown

promise.any() you will first success settled, it will return that. if first fails. it still waits for the first sucess.
if everything failed , with agreegated error

















Aync Await

aync function is different then normal function.

async function will always return a promise.

async function getData()
{
either you return a promise that you created or your data will be wrapped with a promise and returned, if it is not a promise.
}

async await combine is used to handle promise.

before async await introduced
example

all code will execute and promise will resolved and the code will execute.

after async await

you need to use await infront of promise.
it can be used inside a async function.
if we use await the program will wait untill the promise is resolved.

promise execution when multiple promises are there with different time out

first handleprmoise will come into the the callstack and stop at line where await is there.
it suspenfs for some time from  call stack to not block it but when await is resolved the handleprmoise starts from where it is left
if promise is already resolved it continue the execution.
give multiple examples with different time out promises

fetch? 
fetch gives you a promise and const data = await fetch(url)
fetch returns a response object. response object is a readble stream . you need to use .json()
 to get json wvalue which is also a promise.

Erro handling 
we will use try catch to log errors for async await. example


you can use .catch() for async function






























---

Promises

- promises are used to perform async operation.
- Earlier we used to use call back function before async operation was introduced. But it has 2 issues mentioned above. Inverstion of control, call back hell. We are giving control of our program to other function.
- promise will return a empty object in the begining will replace with the value when the value comes in.
- promise.then() we will call the callback function when data is in the promise. It will be called only once.
- fetch will return a promise object, it will show promiseState has pending at first or fullfilled or rejected . and promiseResult will show the result
- promise object is immutable.
- defination - promise object is a place holder which will be filled later with a value  or a conatiner for future value, is an object representing the eventually completion or failuer of an asynchronouse operation.
- promise chaining - adding multiple .then() chaining. you should use return when chaining.

so creating promise like below Promise is the constructor. resolve, reject is given by js.
function createOrder(cart){
const pr = new Promise(function(resolve,reject){});
return pr;
}
- we will reject it if not valid case reject(err);
- In successful we will use resolev(Id);

.catch() will be used when promise is rejected and we will print the message.

catch only check above it in chaining, it will not catch that failed below it in chaing
