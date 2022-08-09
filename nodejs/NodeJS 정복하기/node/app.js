// 05

// const add = require('./add');
// const mult = require('./mult');
// const stat = require('./stat');

// console.log(stat.pi);
// console.log(stat.mean([1, 2, 3, 4, 5]));

// const result = mult(5, 10);
// console.log(result);

// 06
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("what is your name ? ", (answer)=>{
//     console.log("Hello "+answer);
    
//     rl.close();
// })

// 07
const fs = require('fs');

// fs.writeFileSync("./hello.txt", "Hello Youtubers");

// const data = fs.readFileSync("./hello.txt",  {encoding: "utf-8"});
// console.log(data);

// fs.appendFileSync("./hello.txt", "\nWelcome!");

const list = fs.readdirSync(".");
console.log(list);
``` [
  'add.js',
  'app.js',
  'hello.txt',
  'mult.js',
  'package.json',
  'stat.js'
]```