const add = require('./add');
const mult = require('./mult');
const stat = require('./stat');

console.log(stat.pi);
console.log(stat.mean([1, 2, 3, 4, 5]));

const result = mult(5, 10);
console.log(result);
