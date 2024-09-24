Routing, How to create multiple pages??

UseEffect()

if there is no dependency array, useEffect is called at every render of component.

useEffect(()=>{
        console.log("use effect rendered");
    })

if there is a empty depenecy array. Use Effect is called once in the initial render.
useEffect(()=>{
        console.log("use effect rendered");
    },[])

if there is a value in dependecny array. use Effect is called when the value gets updated.
useEffect(()=>{
        console.log("use effect rendered");
    },[btnName])

Hooks can always be called inside the functional component, it cannot be called outside of the functional componenet.

Never create useState in if else condition, for loop and functions due to it might cause inconsitency in application.

createBrowserRouter - it can be used to create the routes for the React page.
```
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>
    },
    {
        path: "/about",
        element: <About/>,
    }
 ])
```
errorElement it can be used to show error page when it happens.
RouterProvider- It will help in rendering the different pages or component of the code
```
 root.render(<RouterProvider router={appRouter} />);

```
useRouteError - This hook will help in getting the route error and there details like 400, 404 etc.
    const err = useRouteError();
    you can get all error information and you can print it on the screen err.status like this.
    
