var renderer = require("./renderer.js");
var url = require("url");
var fs = require('fs');
var htmlHeader = { 'Content-Type': 'text/html' };

function home(req, res) {
    var query_string = req.url;

    if (query_string === "/") {

        // if (req.method.toLowerCase() === "get") {

        //     res.writeHead(200, htmlHeader);

        //     renderer.view("header", {}, res);
        //     renderer.view("footer", {}, res);

        //     res.end();
        // }

        fs.readFile("./home.html", function (err, data) {
            if (err) {
                console.log(err);
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });

    } else if (query_string == '/home' || query_string == '/home.html') {

        fs.readFile("./home.html", function (err, data) {
            if (err) {
                console.log(err);
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (query_string == '/about' || query_string == '/about.html') {

        fs.readFile("./about.html", function (err, data) {
            if (err) {
                console.log(err);
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (query_string == '/contact' || query_string == '/contact.html') {

        fs.readFile("./contact.html", function (err, data) {
            if (err) {
                console.log(err);
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
}

function css(req, res) {
    if (req.url === "/home.css") {
        fs.readFile('./home.css', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/css', 'Content-Length': data.length });
            res.write(data);
            res.end();
        });
    } else if (req.url === "/about.css") {
        fs.readFile('./about.css', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/css', 'Content-Length': data.length });
            res.write(data);
            res.end();
        });
    } else if (req.url === "/contact.css") {
        fs.readFile('./contact.css', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/css', 'Content-Length': data.length });
            res.write(data);
            res.end();
        });
    }
}

module.exports = { home, css };