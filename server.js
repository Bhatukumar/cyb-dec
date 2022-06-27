var http = require("http");
var url = require('url');
var router = require("./router");
var port = "8000";

http.createServer(function (req, res) {
    router.css(req, res);
    router.home(req, res);
}).listen(port);

console.log("Server started in localhost:"+ port + "\npress Crtl+C to terminate....");