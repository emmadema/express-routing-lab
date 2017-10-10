
var express = require('express');
//requires express to be run
var bodyParser = require('body-parser');
//include body parse in the module
var router = express.Router();
//allows us to change app.get to router.get
//creates a mini app called router
router.use(bodyParser.json());

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
	console.log('Something is working');
});

// Fill out the rest of the routes here

//gets just one candy
//SHOW
//I feel like this is more compolicated than it needs to be but it works
router.get('/:id', function(req, res){
	console.log(candies.length);
	console.log(req.params.id);//always as strings
	for( var i=0; i < candies.length; i++){
		console.log(candies[i].id );
		if (candies[i].id == req.params.id) {
			//console.log()
			res.json(candies[i]);

		}
	}
	res.json('500 error');
	// router.use(bodyParser.json());
	// console.log('Something is working 2');
});

//Create
//makes a new candy
router.post('/', function(req, res){
	candies.push(req.body); // add the new cady to the body
});

//Second index
//upadates any info
router.put('/id:/edit', function(req,res){
	candies.find(id);
	candies.push({"name":"Marshmallows","color":"white"});

});

//DELETE
//deltes a candy
router.delete('/:id', function(req, res){
	candies.find(req.body);
	candies.push();
});


module.exports = router;