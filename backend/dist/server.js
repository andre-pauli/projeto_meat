"use strict";
exports.__esModule = true;
var jsonServer = require("json-server");
var fs = require("fs");
var https = require("https");
var port = 3001;
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.post('/login', function (req, resp) {
    resp.json({ message: 'ok' });
});
server.use(router);
var options = {
    cert: fs.readFileSync('./backend/keys/cert.pem'),
    key: fs.readFileSync('./backend/keys/key.pem')
};
https.createServer(options, server).listen(port, function () {
    console.log("JSON Server is running on: https://localhost:" + port);
});
