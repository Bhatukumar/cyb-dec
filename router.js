var renderer = require("./renderer.js");
var url = require("url");
var fs = require('fs');
const { spawn } = require("child_process");
const path = require("path");
var htmlHeader = { 'Content-Type': 'text/html' };


function html(req, res) {
    var query_string = req.url;

    if (query_string === "/") {

        fs.readFile("./home.html", function (err, data) {
            if (err) {
                console.log(err);
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });

    } else if (query_string == '/ask.question' || query_string == '/ask.question.html') {

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

function js(req, res) {
    if (req.url === "/home.js") {
        fs.readFile('./home.js', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript', 'Content-Length': data.length });
            res.write(data);
            res.end();
        });
    }
}

function runScript(question) {
    return spawn('python', ["-u", path.join(__dirname, 'controller.py'), question]);
}

function ans(req, res) {
    var anssbuf = '';
    var anss = '';
    var question = '';
    if (req.url === '/answer.me') {

        req.on('data', chunk => {
            question += chunk.toString();

            const pythonScript = runScript(question);

            pythonScript.stdout.on('data', (data) => {
                anssbuf += data.toString();
                anss += anssbuf.toString();
                // console.log(anss);
                // console.log(data.toString());
            });
            pythonScript.on('exit', function (code) {
                console.log('Child process exited with exit code ' + code);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                // console.log(anss);
                res.write(anss);
                res.end();
            });
        });
    }
}

module.exports = { html, css, js, ans };