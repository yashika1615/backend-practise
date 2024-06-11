// file handling

const fs = require("fs");

// synchronous call
// create a file in current directory whose name will
// be test.txt and we have to write hey there in that file
fs.writeFileSync('./test.txt', "hey There");

