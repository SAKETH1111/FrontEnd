1. Everything in React can be done by using HTML and CSS, Why are we using react then???
2. React gives your coding experience fast and gives you super power to do more with less efforts.
3. Best practice is to seperate component in seperate files. You can create seperate folder called components and move the code over there.
5. src is the main folder in the project of any application.
6. You can use .js, .jsx , .ts , .tsx as extension of the file
7. Keep the file name first letter as it is capital letter.
8. before we import a component, we need to export the componenet.
9. extension is not mandatory in `import paths` is not required.
10. Never keep hard coded data in Components. You can create a folder called `utils` or `common`, `constants`.
11. All constants should be in CAPITAL_LETTERS
12. Default export and name export are different type of exports.
13. 1 file can have only 1 default export.
14. wrie infront of the function or object.
15. Yes, you can use both named and default exports in the same file for same component.
16. Always keep your component small.
17. React does faster DOM manupalation.

    ## React Hooks

    1. State variable, Super powerful variable. when data is updated UI is automatically updated. Super powerful react variable.
    2. Import hooks as named imports.
    3. useState() -   const [restData, setRestData]= useState(null) // passing default valur, you can use any variable name for setRestData. It is re rendering the componenet when you are setting the state
    4. useEffect()
## Reconciliation Algorithm

1. React uses Reconciliation Algorithm, it is also known as react fiber. It came in 2016 i.e React 16
3. Div, h1 , img are actual dom.
4. First react creates Virtual DOM, it is representation of actual DOM.
5. diff algorithm- finds out the differences between updated and previous virtual DOM. and updates the DOM
6. https://github.com/acdlite/react-fiber-architecture
7. 
