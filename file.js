// file handling

const fs = require("fs");

// synchronous call
// create a file in current directory whose name will
// be test.txt and we have to write hey there in that file
fs.writeFileSync('./test.txt', "Hello");

// after creating file if you chsnge hello wrld to
// hello it will override


// asynchronous
fs.writeFile('./test.txt', "Hello world async", (err) => { });

// read contacts.txt file

const result = fs.readFile('./contacts.txt', "utf-8", (err, result) => {
     if (err) {
         console.log("Error, err");
     }
     else {
         console.log(result);
     }
 });
 console.log(result);

//fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

fs.appendFileSync("./test.txt", 'Hey there\n');
