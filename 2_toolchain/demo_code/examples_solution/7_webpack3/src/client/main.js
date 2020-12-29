
import {flatten} from 'lodash-es';
import {sayHello} from './sayHello';
import styles from './assets/styles.css';

let array = [['a', 'b'], ['c', 'd']];
console.log(flatten(array).join(', '));

sayHello();

console.log('styles object : ');
console.log(styles);
