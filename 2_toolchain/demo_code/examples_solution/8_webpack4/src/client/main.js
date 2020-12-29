
import {flatten} from 'lodash-es';
import {sayHello} from './sayHello';
import './assets/styles.css';

let array = [['a', 'b'], ['c', 'd']];
console.log(flatten(array).join(', '));

sayHello();

