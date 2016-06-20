var express = require('express');
var version = require('./package.json').version;

var app = express();
var port = 3001;

app.get('/version', function (req, res) {
    res.send(version);
});

app.listen(port, function () {
    console.log('Listening on ' + port);
});
