const lodash = require('lodash');

let array = [['a', 'b'], ['c', 'd']];

console.log('Hello');
console.log(lodash.flatten(array).join(', '));
