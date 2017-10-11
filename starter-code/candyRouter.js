
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
//this one works
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
//this one works

//Create
//makes a new candy
router.post('/', function(req, res){
	console.log(req.body);//console logging the new candy
	candies.push(req.body);//pushing the new candy into the array
	res.json(req.body);//printing the new candy into the array
});
//this one works

//PUT
//upadates any info
//find one and update
router.put('/:id', function(req, res) {
	//select the candy you want by the id of the candy
	//set the previous name and color to the update name and color
	//push the new name and color into the array
	//display the new name and color on the body
	for( var i=0; i < candies.length; i++){
		console.log(candies[i].id );
		if (candies[i].id == req.params.id) {
			//parm expecting a value
			//console.log()
			//?? req.body.name
			candies[i].name = req.body.name; 
			candies[i].color = req.body.color;
			return res.json(candies[i]);
		}
	}
	res.json("500 error");
});


//DELETE
//deltes a candy
router.delete('/:id', function(req, res){
	for( var i=0; i < candies.length; i++){
		console.log(candies[i].id );
		if (candies[i].id == req.params.id) {
			//parm expecting a value
			//console.log()
			//?? req.body.name
			delete candies[i];
			return res.json({"message" : "deleted"});
		}
	}
});



module.exports = router;