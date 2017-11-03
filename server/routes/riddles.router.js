var express = require('express');
var router = express.Router()
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var riddleSchema = new Schema({creator: String, setup: String, punchline: String});
var Riddle = mongoose.model('Riddle', riddleSchema, 'riddles');

//POST Route
router.post('/', function(req, res) {
    console.log(req.body);
    var riddleToAdd = new Riddle(req.body);
    riddleToAdd.save(function(err, data) {
        if(err) {
            console.log(err);
            res.sendStatus(500)
        } else {
            res.sendStatus(201);
        }
    })
}) // End POST route

// GET Route
router.get('/', function(req, res){
    // Riddle - Is a reference to the collection when finding things in the DB
    Riddle.find({}, function (err, foundRiddles) {
        if (err) {
            console.log("ERROR! : ", err);
            res.sendStatus(500);
        }else {
            res.send(foundRiddles);
            console.log('success');
        }
    }); // END FIND
}); // END GET Route











module.exports = router;