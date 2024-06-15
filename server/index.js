const http = require("http");
const fs = require("fs");


const myServer = http.createServer((req, res) => {
    const log = '${Date.now()}:${req.url} New Req Recieved\n';
    console.log(log);
    fs.appendFile('log.txt', log, (err, data) => {
        switch (req.url) {
            case '/': res.end("home page");
                break
            case '/about': res.end("hello its me ");
                break;
            default:
                res.end("404 not found");
        }
       res.end("Hello from server again");   
    });
});
    //    // console.log("new request recieved");
    //     console.log(req);
    //     res.end("Hello from server again");
  

myServer.listen(8000, () => console.log("server started"));
