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

Go into the folder `3_npm_exercise`. Setup of the project : we want to make a small HTTP server with NodeJS,
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
