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
//const fs = require('fs');

// fs.writeFileSync("./hello.txt", "Hello Youtubers");

// const data = fs.readFileSync("./hello.txt",  {encoding: "utf-8"});
// console.log(data);

// fs.appendFileSync("./hello.txt", "\nWelcome!");

//const list = fs.readdirSync(".");
//console.log(list);
// ``` [
//   'add.js',
//   'app.js',
//   'hello.txt',
//   'mult.js',
//   'package.json',
//   'stat.js'
// ]```

// 8

// Synchronous vs Asynchronous
// Block       vs Non-Block

// const fs = require('fs');

// let startTime = Date.now();
// let text = "default";
// setTimeout(()=> {
//     console.log(Date.now() - startTime, "First");
// }, 5000);
// console.log(Date.now() = startTime, "Second");

// 10 - NPM 패키지
// const readline = require('readline-sync');

// const name = readline.question("what is your name?");

// console.log(name);

// 11
// JSON
// Javascript Object Notation
// const fs = require('fs');

// const data = fs.readFileSync("./vocab.json", {encoding : "utf-8"});
// let arr = JSON.parse(data);
// const ob = {
//     name: "Daniel",
//     age: 20,
//     description: "I go to school.",
// };

// fs.writeFileSync("test.json", JSON.stringify(ob, null, 2));

// 13 HTTP 서버 만들기
// const http = require("http");

// const server = http.createServer((req, res) => {
//     if(req.url==="/"){
//         res.write("<h1>Hello from nodejs</h1>");
//     }else{
//         req.write(`<h1>You have entered this url : ${req.url} </h1>`);
//     }
//     res.end();
// });

// server.listen(3000, ()=>{
//     console.log("The server is listening on port 3000");
// })

const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const server = express();
const words = require("./db/words.json");

// GET www.facebook.com/
// POST ID:abc Pass:1234
// DELETE
// PUT

server.engine(
    "hbs",
    hbs({
        extname:"hbs",
        defaultLayout:"layout.hbs",
        partialsDir:"partials",
    })
);
server.set("view engine", "hbs");
server.use(express.static(__dirname+"/public"));
server.use(bodyParser.urlencoded({ extended: false }));
server.get("/", (req, res) => {
  res.render("home", {
    words,
  });
});
server.post("/", (req, res) => {
  const { query } = req.body;
  res.render("home", {
    words: words.filter((w) =>
      w.word.toLowerCase().includes(query.toLowerCase())
    ),
  });
});
  
server.delete("/", (req, res) => {
    let { word } = req.body;
    words = words.filter((w) => !(w.word === word));
});

server.get("/add", (req, res) => {
    res.render("add");
});
server.get("/quiz", (req, res) => {
    res.render("quiz");
});
server.use((req, res) => {
    res.render("404");
});
// server.get("/", (req, res)=>{
//     res.sendFile(__dirname + "/index.html");
// });

// server.get("/about", (req, res)=>{
//     res.sendFile(__dirname + "/about.html");
// });

// server.use((req, res) => {
//     res.sendFile(__dirname + "/404.html");
// });

server.listen(3000, (err)=>{
    if(err) return console.log(err);
    console.log("The server is listening on port 3000");
})
