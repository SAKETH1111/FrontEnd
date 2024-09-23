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
