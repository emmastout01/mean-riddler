var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');
var riddles = require('./routes/riddles.router.js');
// app.use's

app.use(bodyParser.json());
app.use(express.static('server/public'));
app.use('/riddles', riddles);

//Spin up server
app.listen(port, function() {
    console.log('Listening on port ', port)
})

// MONGOOSE
var mongoose = require('mongoose');
// gamestop is the name of our database
// 27017 is the default mongo port number
var databaseUrl = 'mongodb://localhost:27017/gamestop';

mongoose.connection.on('connected', function() {
    console.log('mongoose is connected!');
});

mongoose.connection.on('error', function() {
    console.log('mongoose connection failed');
});
mongoose.connect(databaseUrl);
// Eventually, the mongoose code should be in a module