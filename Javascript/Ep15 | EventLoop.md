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

