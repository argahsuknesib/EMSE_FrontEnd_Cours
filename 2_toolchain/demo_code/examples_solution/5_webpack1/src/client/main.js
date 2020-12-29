
import {flatten} from 'lodash-es';
import {sayHello} from './sayHello';

let array = [['a', 'b'], ['c', 'd']];
console.log(flatten(array).join(', '));

sayHello();
