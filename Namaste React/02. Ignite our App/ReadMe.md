# Ignite Our App

1. npm https://www.npmjs.com/ - it manages the package ( npm doest not mean node package manager. but it manages the packages but it doesnot have a defination.)
2. npm is a standard repostiroy for all the packages. All the packages and library are hosted in npm.
3. `npm init` - will configure npm into your project, it will create a configuration json file `package.json` with all the configuration required by npm.
4. package are also known as dependencies.
5. Most important package in our project is bundler.
6. bundler is basically makes our project or packages to be ready for production deployment. like clean, minimized code. A bundler is a development tool that combines many JavaScript code files into a single one that is production-ready loadable in the browser. 
7. examples of bundler are webpack, parcel etc
8. `create-react-app` uses webpack behind the seen.
9. In this project we will use `parcel`. `npm install -D parcel` to install parcel dependencies. `-D` is tell it is dev dependencies.
10. Dev dependecies are used for development environment not for production environment.
11. ^ - caret . the dependency will automatically updated to new minor/patch version in package.json without incrementing the major version, ~ will update to future patches without incrementing minor versions.
12. `package-lock.json` - it will keep track exact version that is being installed, also check if the development an production has same versions when deployed.
13. `node_modules` - it has all the code that `npm` has fetched, all the dependecies code are pulled into the dev. Transitive dependency- if you pull one dependecy into your project like parcel, it might have other dependency and that other dependecy might have more dependecy so the node_module folder is large with lot of dependecy.
14. 
