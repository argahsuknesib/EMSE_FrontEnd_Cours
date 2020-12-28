
const sayHello = require('./myLib');
const readline = require('readline');


console.log('Hello world');
sayHello();


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name?\n', (answer) => {
  console.log(`Hello ${answer}!`);
  rl.close();
});
