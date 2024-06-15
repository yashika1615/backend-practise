// // file handling

const fs = require("fs");
const os = require('os');
console.log(os.cpus().length);

// // synchronous call
// // create a file in current directory whose name will
// // be test.txt and we have to write hey there in that file
// fs.writeFileSync('./test.txt', "Hello");

// // after creating file if you chsnge hello wrld to
// // hello it will override


// // asynchronous- non blocking request
// fs.writeFile('./test.txt', "Hello world async", (err) => {
// // read contacts.txt file

// const result = fs.readFile('./contacts.txt', "utf-8", (err, result) => {
//      if (err) {
//          console.log("Error, err");
//      }
//      else {
//          console.log(result);
//      }
//  });
//  console.log(result);

// //fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

// fs.appendFileSync("./test.txt", 'Hey there\n');

// fs.cpSync("./test.txt", "./copy.txt");
// fs.unlinkSync("./copy.txt");
// console.log(fs.statSync("./test.txt").isFile());
// fs.mkdirSync("my-docs/a/b",{recursive: true});

// // blocking and non-blocking

// blocking request

// console.log("1");
// const result = fs.readFileSync("contacts.txt", "utf-8");
// console.log(result);
// console.log("2");

// non blocking
console.log("1");
fs.readFile("contacts.txt", "utf-8", (err, result) => {
    console.log(result);
});
console.log("2");
console.log("3");
console.log("4");


