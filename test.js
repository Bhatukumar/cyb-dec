// let fs = require('fs');
// let http = require('http');

// http.createServer(function (req, res) {
//     fs.readFileSync('/../frontent/html/home.html' , function(err, data) {
//         if(err){
//             console.log(err);
//         }
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);

var fs = require('fs');
var http = require('http');
http.createServer(function (req, res) {
    var query_string = req.url;

    if (query_string == '/') {
        fs.readFile("./frontend/html/home.html", function (err, data) {
            if (err) {
                console.log(err);
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            // res.write('Welcome To Home Page');
            res.end();
        });
    }
    else if (query_string == '/home' || query_string == '/home.html') {
        fs.readFile("./frontend/html/home.html", function (err, data) {
            if (err) {
                console.log(err);
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            // res.write('Welcome To Home Page');
            res.end();
        });
    }
    else if (query_string == '/contact' || query_string == '/contact.html') {
        fs.readFile("./frontend/html/contact.html", function (err, data) {
            if (err) {
                console.log(err);
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            // res.write('Welcome To Home Page');
            res.end();
        });
    }
    else if (query_string == '/about' || query_string == '/about.html') {
        fs.readFile("./frontend/html/about.html", function (err, data) {
            if (err) {
                console.log(err);
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            // res.write('Welcome To Home Page');
            res.end();
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write("NOT FOUND");
        res.end();
    }
}).listen(8000);
console.log("server started in localhost:8000; press Crtl+C to terminate....");