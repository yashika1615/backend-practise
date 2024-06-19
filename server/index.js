const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}:${req.url} New Req Recieved\n`;
    console.log(log);
    fs.appendFile('log.txt', log, (err) => {
        if (err) {
            console.error(err);
            res.statusCode = 500;
            return res.end("Internal Server Error");
        }

        if (!res.finished) {
            switch (req.url) {
                case '/':
                    res.end("home page");
                    break;
                case '/about':
                    res.end("hello its me");
                    break;
                default:
                    res.end("404 not found");
            }
        }
    });
});

myServer.listen(8000, () => console.log("server started"));
