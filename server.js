var http = require("http");
var url = require('url');
var router = require("./router");
const hostname = '127.0.0.1';
const port = "8000";

http.createServer(function (req, res) {
    if (req.method == 'POST') {
        console.log(req.method + " " + req.url);
        router.ans(req,res);
    } else if (req.method == 'GET') {
        console.log(req.method + " " + req.url);
        router.html(req, res);
        router.css(req, res);
        router.js(req, res);
    } else {
        res.end("Invalid Request: " + req.method);
    }
}).listen(process.env.PORT || port);

console.log(`Server running at http://${hostname}:${port}/`);
// console.log("Server started in localhost:" + port + "\npress Crtl+C to terminate...."); 