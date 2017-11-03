var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');
// app.use's

app.use(bodyParser.json());
app.use(express.static('server/public'));

//Spin up server
app.listen(port, function() {
    console.log('Listening on port ', port)
})

