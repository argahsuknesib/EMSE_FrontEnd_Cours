# Frontend Web Development

Quentin Richaud

qrichaud.pro@gmail.com

---

# Basics of NodeJS

- Install `node` on your machine
- Write javascript source file
- Run it with `node yourSource.ijs`

---

# NodeJS modules

JS had no native modules until ES6 (2015). 

Several non native module systems were created to overcome this missing feature. 

NodeJS uses the commonJS module convention.

---

# NodeJS : CommonJS modules


    !Javascript
    // myLib.js
    function sayHello() {
      console.log('Hello');
    }
  
    module.exports = {
      sayHello: sayHello
    }  


.

    !Javascript
    //index.js
    const myLib = require('./myLib'); // '.js' suffix optionnal
    myLib.sayHello();
  

---

# NodeJS : importing native API

NodeJS runtime provides an API, for importing these you don't need to have third party library files

<https://nodejs.org/docs/latest/api/>


    !Javascript
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('What is your name?\n', (answer) => {
      console.log(`Hello ${answer}!`);
      rl.close();
    });


--- 

# NodeJS : using 3rd party libraries

- Example with the library `lodash` which provides utilities <https://lodash.com/>
- Manual option : 
    - download the library [source file](https://raw.githubusercontent.com/lodash/lodash/4.17.15-npm/lodash.js)
    - write `require('./lodash.js')`


---

# Introducing node package manager : `npm`

You need to install `npm` on your machine

To use `npm`, your project itself must be a npm projet : 

    - setup with the command `npm init`
    - it generates a `package.json` file at the root of your project


---

# Install dependencies with npm 

Run `npm install lodash`

- it fetches the package named `lodash` from npm repository (see <https://www.npmjs.com/>)
- it downloads it, and store under the directory `./node_modules/`
- it saves the dependency in your `package.json` :

.

    "dependencies": {
      "lodash": "^4.17.20"
    }

- With git (or another VCS) : you don't include `node_modules`
- When sharing a project, you run only `npm install` to install all dependencies configured in the project's `package.json`

---

# NPM dependencies

To understand how package version numbering works, see semver <https://docs.npmjs.com/cli/v6/using-npm/semver>

---

# Import a dependency installed by `npm`


    !Javascript

    const lodash = require('lodash');
    
    let array = [['a', 'b'], ['c', 'd']];
    console.log(lodash.flatten(array).join(', '));


Npm algorithm to find the JS file to import : 

- looks for the first parent directory with a `node_module` directory
- looks for a package (directory with package.json file at root) named `lodash`
- imports the JS file pointed by the `"main"` property of `package.json`

---

# NPM scripts

We can add scripts commands to the `package.json` file.


    "scripts": {
      "start": "node index.js"
    }

then run `npm run start`

Scripts are useful for : 

- Development workflow (only having to run some predefined commands)
- Testing (and Continuous Integration)
- Deployment 

---

# Exercise : setup NPM for this project

Go into the folder `example/3_npm_exercise`. Setup of the project : we want to make a small HTTP server with NodeJS,
which will serve a Single Page Application. 

For this to work : we put static assets files (HTML, JS, CSS, images, fonts)
into a folder `/dist`. The HTTP server must follow this logic : 

- If the requested path matches a static asset, it must serve the asset file
- Otherwise, for any request (any path), it must serve the `index.html` file

We put the server code under the directory `/server`, it has only one source file `index.js`.

---

# Exercise : setup NPM for this project

- Analyse the server code `server/index.js` to determine which dependencies are needed
- Install the dependencies with `npm install` (check that your package.json is updated)
- Add a script to your `package.json` in order to be able to launch the server with the command `npm run start`

---

# But what about frontend?

NodeJS tools will help us to process our client javascript code, before shipping it to the browser.

---

# JS Transpilation

Problems : 

- New versions of JS (ES6, and ES7+) are not supported by browsers
- It's hard to code using only old features 
- It's pointless to have a language that can't evolve before of browser support

Solution :

Transpilation. The act of transforming ES6 (or newer version) code, into ES5 code.

---

# Compilation vs Transpilation

Compilation : translate code written in a programming language into machine code

Transpilation : translate code written in a programming language into code written in another programming 
language 

---

# Transpilation into JS

Since browsers can only understand javascript, if we want to develop frontend code in another language,
it is possible using a transpiler that will translate that language into javascript to ship to the browser.

Examples : 

- Typescript : A strongly typed language, that looks like javascript with types
- CoffeeScript : a language that looks like ruby and transpiles to javascript

---

# Babel 

The "universal" javascript transpiler. It goal is to transpile any newer version of Javascript (ES6, ES7 and +) into
older versions of Javascript.

Example : 

      // ES6 
      let name = 'Bob'; 
      let a = () => {
        console.log(`Hello ${name}`);
      };


If configured to transpile down to ES5, Babel will output : 


      // ES5
      var name = 'Bob';
      var a = function() {
        console.log("Hello ".concat(name));
      } 
        

---

# Using Babel

- install it via `npm` : `npm instal @babel/core @babel/cli @babel/preset-env`

Babel is an npm package with a Command Line utility, which can be called in 2 ways :

- `./node_modules/.bin/babel`
- Using the `npx` utility (install on your machine) : `npx babel` (this is just a shortcut to the first option)

Configure babel by creating a `babel.config.js` file at the root of the directory :


    module.exports = {
      "presets": ["@babel/preset-env"]
    }

Run : `npx babel src/client -d dist`, this will transpile any js file from `src/client` and output it 
into `dist/`.

---

# Setting up npm scripts


    "scripts": {
      "build": "babel src/client -d dist",
      "start": "npm run build && node src/server/index.js"
    }


Now this is our workflow :

- we don't write our client code directly into the `dist/` directory (in fact, this directory should not be versionned)
- we write our code under `src/client/`
- the `npm run build` command builds our client code into the `dist/` directory
- the `npm run start` command builds the client code **and** starts our server which will serve the code in the `dist/` directory
