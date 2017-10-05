
//Did you use npm install to
//add all these packages
//to our project? -Done

var express = require('express');
//requires express to be run
var app = express();
//creates and express application
var bodyParser = require('body-parser');
//includes body parser in the module

var port = process.env.PORT || 3000;

// How do we 'require' the candyRouter file?
var myRouter = require('./candyRouter');

//tells the application we want to use body parser middlewear
app.use(bodyParser.json());

//How do we redirect the /candies path
//through our candyRouter?
//Hint: you need app.use
app.use('/candies', myRouter);

app.listen(port);