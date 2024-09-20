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
