
## Type of Testing can developer can do?
1. Unit Testing
2. Integration Testing
3. End to End Testing

**Unit Testing**
- You test your react componet in isolation of the App.
- Only one unit or small component of application is called unit testing.
**Integration Testing**
- Testing the Integration of components, so there are multiple components that are talking to each other, so we will develop a flow or action in react application to test.
**End to End Testing**
- Testing from landing on to the page , all the flows till we are exiting the page.

## React Testing Library
- React testing library uses `jest` behind the scenes.
- `npm i -D @testing-library/react`
- `npm i -D jest`
- To work with babel, jest need additional dependecies to install and configure. (`npm install --save-dev babel-jest @babel/core @babel/preset-env`) https://jestjs.io/docs/getting-started#:~:text=To%20use%20Babel%2C%20install%20required%20dependencies%3A
- So here we are adding babel but parcel is already having its own babel configuration. So our application will be confised to use which babel. so we need to disable the parecel babel and override the parcel babel. we need to make change `.parcelrc` https://parceljs.org/languages/javascript/#:~:text=transformer%2Dbabel.-,.parcelrc%3A,-%7B%0A%20%20%22extends%22
- if we need to run test case use command `npm run test`- it will call jest
- `npx jest --init` It will initalise and configure the jest. `npx` means executing. use `jsdom` testing environment. As test cases dont run on browser so they need environment to run, so jsdom is like a browser feature where the test runs.
- coverage report - babel will be used here.

