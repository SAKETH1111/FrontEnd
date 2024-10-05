1. Redux is not mandotary in your application.
2. It is best to use Redux when there is heavy data storage and on Big Applications.
3. You can build you applications without using redux too...small application dont need to use Redux it can be done by following Context api of React.
4. Redux is not part of React, It is a different library.
5. Zustand is another library, It can be used in place of Redux it is a lightweight library.
6. Redux offers easy in Debugging.
7. There are Redux Dev tools like React Dev tools.
8. Redux offer states management. It can be used in combination with react, angular, next.js etc
9. In this project we will be using React-Redux library and React-Toolkit. We will not use the (vanila)redux library because it is old now.
10. Redux-toolkit= Standard way to write redux logic.
11. Parts of Redux are called slice.
12. Slice means different logical seperation of data like cart slice, user slice, theme slice.
13. when you click on add button , it will dispatch an action. Then it will calls a function, the function is known as reducer. Then this function will modify the slice.
14. Read from slice. We will use selector. selector will read the data from slice and it will updated where the data is consumed.
15. When using selector, it menas subscribing to the store.
16. Click Add button -> dispatch Action will be called -> Will call a reducer function -> which updates the slice of a redux store.
17. Component -> selector(it helps in updating the component and getting the information from store) -> subscribed store 


  # Redux ToolKit
  Steps to setup redux
  - Install @reduxjs/toolkit 2.2.7 and react-redux 9.1.2
  - Build our store
  - connect our store to our app
  - we will create a card slice ( cartSlice)
  - we will dispatch (Action)
  - Selector

    configureStore is used to create the store. it comes from @reduxjs/toolkit as storage creation is redux 
    provider comes from react-redux becuase it acts as a bridge between react and redux to get the data from store

    Provider would be wrapped around the whole application. we will pass the store as props to it.

    slice can be created using createSlice which comes from @reduxjs/toolkit. 
    In Slice first we pass the name of the slice, 2nd the initalState of the slice then we will pass the reducer, in Reducer we will have what type of action and what reducer function should we do.
    createSlice will return action and reducers. we need to export both the action and dispatcher.
    
    - selector is a basically hook , to acess to store. So we will use this hook to get access to the store. so it will help in subscribing to a store.
   
    - to dispacth an action we will use a useDispatch hook to do it from react-redux
   
    - 
