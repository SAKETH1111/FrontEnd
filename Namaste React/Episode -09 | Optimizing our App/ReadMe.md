
Hooks are utility function, given in react.

We can create our own hook.

creating a hook, alwways create the file name with use in the begining
```
window.addEventListener("offline",()=>{
    setOnlineStatus(false)
})
```
online event listiner will help us to know if we have 


In Network you have an option to disable the internet connection to check the offline situation of your webpage.

Optimizing code

// chunking, code splittimg, dynamic bundling,  dynamic import , Lazy loading to break down your app in to smaller chunks.

so basically we will not load everything untill wehn required. Like when we go to that page then only load.

so it is basicalyy on demand loading.

lazy() function is used. it is named export in react.

const grocerry = lazy(()=> {import("path") })

Suspence must be wrapped around the component
fallback is used to show something untill the component is available.


