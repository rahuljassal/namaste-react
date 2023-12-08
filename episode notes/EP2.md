# EP 02 => igniting APP

## Theory

### • Is React is making our app fast ?

    yes, but there are lot of other things which helps react

### • What is NPM ?

    It's not node package manager
    NPM can be referred as the standard common repo for all the packages

### • Most important package in react app

    Bundler, it's responsible for the bundling /packaging of app, so that it can be pushed to production

### • What is 'Parcel/Webpack'? Why do we need it?

    Parcel is bundler, which is responsible for lot of things in a react app.
    few of them are
    1. Dev Build
    2. Local server
    3. HMR - hot module rendering
    4. file watching algorithm - written in c++
    5. caching -faster builds
    6. Image optimization
    7. minification
    8. bundling
    9. compressing
    10. [consistent hashing](https://www.toptal.com/big-data/consistent-hashing)
    11. code splitting
    12. Differential bundling (to support older versions of browser)
    13. error handling
    14. diagnostic
    15. https
    16. Tree Shaking algo
    17. Different dev and prod build

### • What is parcel-cache

    Parcel cache is a cache stored by parcel so on next rendering time taken can be minimised to as much as possible

### • What is 'npx'?

    npm is used to install a package.
    npx is used to execute a package

### • What is difference between dependencies' vs devDependencies'

#### dependencies =>

    Dependency is an object that contains the library, which your project requires for production environments and functioning effectively.

#### devDependencies =>

    devDependencies are those packages in the package.json file that you need only for project development purposes. Example- Babel, Webpack, etc.

### • What is Tree Shaking?

In production builds, Parcel statically analyzes the imports and exports of each module, and removes everything that isn't used. This is called "tree shaking" or "dead code elimination". Tree shaking is supported for both static and dynamic import() , CommonJS and ES modules, and even across languages with CSS modules.

### • What is Hot Module Replacement?

    Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:

    1. Retain application state which is lost during a full reload.
    2. Save valuable development time by only updating what's changed.
    3. Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser's dev tools.

### • List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

    1. HMR - hot module rendering
    render only the changed components
    2. file watching algorithm - written in c++
    a algo used by parcel to find the change in a file
    3. caching -faster builds
    caching of previos states so next state can be achieved in minimum time possible
    4. Image optimization
    one of the most costly operation in webapp is to download a image so Optimized images have several benefits: Faster Load Times: Smaller image sizes mean quicker downloads, meaning reduced page load times. Lower Bandwidth Usage: Optimized images consume less bandwidth on the user side, benefiting those on limited data plans or slower networks

### • What is " gitignore'? What should we add and not add into it?

    a file in which we can mention the folder or files which shouldn't be pushed to remote repo

#### Things we should add

    1. our main code
    2. any data used in app (image,json)

#### Things we shouldnt add

    1. node_modules
    2. things which can be regenerated

### • What is the difference between 'package.json" and 'package-lock.json'

    package.json => a config file to manage the info of packages used in the app. the versions will be loosely typed

    package-lock.json => exact versions of packages, to insure there will be no error due to version differences

### • Why should I not modify package-lock.json'?

    package-lock.json => exact versions of packages, to insure there will be no error due to version differences
    changing this file may result in some unknown errors due to mismatch versioning

### • What is 'node_modules'? Is it a good idea to push that on git?

    node_modules is basically the database of packages. it's where all data (code) for the packages exist.
    and it's not a good idea to push node_modules to git as we can generate node_modules through npm i or npm install

### • What is the 'dist' folder?

    dist folder contains the build files created by parcel on triggering command
    npx parcel index.html
    npx parcel build index.html

these files will contains a minified version of app code

### • What is 'browserlists

browserlists : is a package which make sure your app will work for older version of browser as well.
you can mention the required goal in package.json file.
for eg => "browserlists":["last 2 versions"]

#### • Read about dif bundlers: vite, webpack, parcel

#### • Read about: ^ - caret and ~ - tilda

    1. ^ for allowing minor updates
    2. ~ for allowing major updates

#### • Read about Script types in html (MDN Docs)

### References

#### • Creating your own create-react-app

#### • Parcel Documentation

#### • Parcel on Production

#### • BrowsersList: https: / /browserslist.dev/
