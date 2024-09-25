 Class Based Component

 - This is a older way of creating components we need to learn this to get deeper understanding of react
   which will help in interviews because most companies old code still use class based componenets.

 - This is the way we create class based component.

```
class UserClass extends React.Component {
render() {
return ()


    
}
```

you need to declare class with a name and extend it to React.component.
It has a render method which returns the JSX. 


- To get the props in class, we need to create a constructor and need to use super(props)
  ```
  constructor(props){
        super(props);
        this.state = {
            count: 0,
            coun1:1
        }
    }

  const {count} = this.state;

  ```
  We need to always right super props. We never use this.props before super(props).
  this.props will be used to get the props value in class based component.

How can we create state variable hook in Class based company.

Loading a class means you are creating a Instance of the class. when you are creating a instance of class, 
state variable is called and this where you need to declare the `state variable`.

to set the state, never update the state varibally directly.
```
this.setState({                
                count: this.state.count+1,
            })
```


  First Constructor is loaded when component is instantiated then render is called.
  ComponentDidMount will be called after constructor, render then ComponentDidMount.

  ComponentDidMount will be used to make the API call, It is same like useEffect in functional componenets.
  
