
var express = require('express');
//requires express to be run
var bodyParser = require('body-parser');
//include body parse in the module
var router = express.Router();
//allows us to change app.get to router.get
//creates a mini app called router

//What would need to go into candies
//in order to pass our first test?
//added an array of candies
var candies =[
{"id":1,"name":"Chewing Gum","color":"Red"},
{"id":2,"name":"Pez","color":"Green"},
{"id":3,"name":"Marshmallow","color":"Pink"},
{"id":4,"name":"Candy Stick","color":"Blue"}
];


//INDEX
router.get('/', function(req, res) {
	// What would go here? 
	// Hint: we want all candies in JSON format
	res.json(candies);
	router.use(bodyParser.json());
	console.log('Something is working');
});

// Fill out the rest of the routes here

//gets just one candy
//SHOW
router.get('/:id', function(req, res){
	router.param('id');
	router.use(bodyParser.json());
	console.log('Something is working 2');
});

//gets a new html form
//router.get('/new', function(req, res){

//});

//makes a new candy
//router.post('/', function(req, res){

//});

//updates array with new info
//router.get('/id:/edit', function(req,res){

//});

//deltes a candy
 //router.delete('/:id', function(req, res){

 //});

 //app.use("/candy", router);

module.exports = router;