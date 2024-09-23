## Monolith and micro service architecture

Monolith architecture- it is everything is built inside one service.

Micro Service - Every Service is build independent of other Service 
but they communicate with each other to form a service. So that one gets down other works and fix needs to be done to that sercvice only.
They run on differents port, all these can be delpoyed by same domain name.



There are two ways to api call to fetch the data.

1. As soon as page load the api call is made, it will wait till we get the data and render the UI.
2. As soon as page load we render the UI , then we will call the api and render the UI again after getting the data.

   In React we will always use the 2nd approach, Because of better UX. so that user see somethings and then we get the correct UI.

React renders cycle are fast.

Hook is a normal JS function that react gives it to us.

useEffect() - two arguments will pass in useEffect.
1. Call Back function and second argument is dependency array.
2. Call Back function will be called at the end of the componenet render.

   fetch() - it is used in Java script to fetch the data from the API.
   asyn and await can be used to wait for the api to be succesfully.

   If there is origin miss match . CORS error will come. because of the origin miss match.
   Allow cors origin

As we are getting the data from the API, We can introduce spining loader untill the data becomes available.
We use Shimmer UI- it shows fake page untill the UI gets loaded.

- React will re render the whole component when state is updated.
- So you declare const variable for the state but how is it assigning the value to it, As state updates react re renders the component. So it will be a new variable that is getting assigned.
- But UI you will not see that componenet is entierly rendering due react reconcilation, it checks the diff and updates the UI.
- flex will align the items in 1 one line side by side

We are creating a input box to search a what type of restaurant we want. We will be creating a state variable to take the input in input box. but here we need to use onChange event handler as we type in the input box. We need to update the set state. if dont use on change the input box will be the default value we passed in the state.


Always remeber react state update renders the component.
State will render the component which it is present in.

JSon viewer chrome plugin shows the json files in prettier way

you can use this infront of the url to fix the cors proxy issue.
https://corsproxy.io/?

instead of the plugin. but it might have a limit, as we are developement it is fine.

