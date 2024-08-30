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
12. `package-lock.json` - it will keep track exact version that is being installed, also check if the development and production has same versions when deployed.
13. `node_modules` - it has all the code that `npm` has fetched, all the dependecies code are pulled into the dev. Transitive dependency- if you pull one dependecy into your project like parcel, it might have other dependency and that other dependecy might have more dependecy so the node_module folder is large with lot of dependecy.
14. node_module- will not needed in production or github repository. so to do that you can create `.gitignore` and declare the file which we dont want in production.
15. Your package.json and package-lock.json will have all the information about depenedncies, by simply using npm install, you will have all the node_modeule dependecies. Thats why you doneed to upload it into github.
16. `npx parcel index.html` here index.html is the source file. npx means executing the dependecy. executing the parcel dependecy.
17. The parcel execution will host the source file to the local host server and that builder server is a development server.
18. CDN link used for Getting react is not a good way because we need to update the links as react versions get updated, instead you can install the dependecy using npm. So it will be added to package.json and it will be available in node_modules. Same for react-dom. npm i react-dom ( i is install).
20. `import` are not present in normal javascript or browserscript files. you need to define the script type as `module` then imports will work in javascript file.
21. Parcel - will update the code as you change in the browser( Hot Module Replacement). It uses file watching algorithm ( it is written in C++)
22. Parcel - Dev Build, Hot Module Replacement, Local Server, Caching- Faster Builds(. parcel-chace files). Image Optimization, Minification of code, Bundling, compress your code, Consistent hashing, code splitting , differential bundling ( support different browsers and different versions of the browser), Diagnosting, Error Handling, Host on your application with Https. Tree Shaking (parcel will remove unnessary code), has lazy mode. Learn more at https://parceljs.org/ . Different dev and production bundles. Production build will take little more time.
23. `npx parcel build index.html` this will create production bundle. It will put all those files in a folder called `dist`.
24. 
