var http = require("http");
var url = require('url');
var router = require("./router");
var port = "8000";

http.createServer(function (req, res) {

    if (req.method == 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(body);
            res.end('ok');
        });
    } else if (req.method == 'GET') {
        // console.log(req.method);
        router.home(req, res);
        router.css(req, res);
        router.js(req, res);        
    } else {
        res.end("Invalid Request: " + req.method);
    }
}).listen(port);

console.log("Server started in localhost:" + port + "\npress Crtl+C to terminate....");