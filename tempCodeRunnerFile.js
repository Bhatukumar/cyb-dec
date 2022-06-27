var http = require("http");

// server sends all requests to router file


// set the port #
port = "8000";

// server to listen for requests
http.createServer(function (req, res) {
    router.css(req, res);
   router.home(req, res);
}).listen(port);