1. We can create differents scirpt in package.json to run our program.
```
"scripts": {
"start":"parcel index.html",
"build":"parcel build index.html"
}
```
To run this we use , `npm run start` which is simialar to `npx parcel index.html` to build we run `npm run build`.

2. React.createElement => will create a object => React Dom will render the object to Html element.
React element is basically a object.

4. JSX is a javascript syntax that is used to write react elements.
  `const jsxHeading= <h1> Hello Saketh</h1>` this is a jsx. jsx is not HTML in JS. HTML like syntax
5. JSX is not a part of react. It is seperate. You js engine doesnot understand jsx. js is a code that js engine understand.
6. JS engine understand es6 or ecma script.
7. JSX code is transpiled before it reaches the js engine by parcel. parcel will use the babel. JSX is created by FB.
8. babel will transpiling the code that js engine can understand or browser.
9. JSX => babe transpiles to React.createElement => will create a object => React Dom will render the object to Html element. babel will convert JSX to react.createElement.
10. Babel transpiles the code from Es6 to older compatible browser to understand.
11. In HTml you can use `class` to define the class name like this class="saketh" but in jsx we need to use `className="saketh'` to define a class. Camelcase is used as attribute in jsx but not in html
12. if the jsx is single line it is fine but it is multiple line we need to use `()`
13. React Component -> 2 tyoes of components in react. 1. class based component ( old way of writing code) 2. Functional Component ( New way of writing code).
14. Always use functional component in future. react functional component is normal javascript component.
15. Always create a component with Capital letter at first character other wise it will not be a component.

```
this is a return a react element is a functiona component or javascript component.
const Heading = () => {
return <h1> This is a functional component</h1>;
}
or
const Heading = () => (
 <h1> This is a functional component</h1>
)

To reander the functional component.
we declare the component in this way.
<Heading/>
```
15. component compensition- Insterting one component into other components into each other.











