
// This is the modern way of doing it, using ES6 module, and having
// proper namespace encapsulating between scripts, as we should expect from a modern language

let myModuleVariable = 'hello';

let anotherVariable = 'world';
// This variable is not exported, it cannot be accessed outside this module (=this source file).

export {myModuleVariable};
