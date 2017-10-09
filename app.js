/**
 * Import JS libraries which we installed with npm 
 */
var express = require('express'); // Web server framework on top of node.js
var bodyParser = require('body-parser'); // Needed to be able to parse request body (req.body) content of POST & PUT request
var mongoose = require('mongoose'); // Interface, which enables to Express to work with a MongoDB databse 

// Import Mongoose Schema file (models/beer.js)
Beer = require('./models/beer');

// Initalize express web server
var app = express();

// Configure express server with body parser library
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set port for express web server
app.set('port', 3000);

// Connect to MongoDB database "beerFavs" via mongoose
mongoose.connect('mongodb://localhost/beerFavs');
var db = mongoose.connection;

// Non-API call to base URL (http://localhost:3000)
app.get('/', (req, res) => {
	res.send('Please use /api/beers');
});

/**
 * API CALLS
 */

// GET Http Request (Read) - Get all beers
app.get('/api/beers', (req, res) => { // req = request data on the outgoing call, res = response from the call
	Beer.find((err, beers) => { // Call find() mongoose function (http://mongoosejs.com/docs/queries.html) to find all beers in database
		if(err){ // if an error occured => print error stack
			throw err;
		}
		res.json(beers); // successful response returns JSON list of beers
	});
});

// GET Http Request (Read) - Get one specific beer by id
app.get('/api/beers/:_id', (req, res) => { // The : in front of _id in the url represents a parameter which can take one different _id values for different beers
	Beer.findById(req.params._id, (err, beer) => { // Call findById() mongoose function to find beer in database
		if(err){
			throw err;
		}
		res.json(beer);
	});
});

// POST Http Request (Create) - Add a new beer
app.post('/api/beers', (req, res) => {
	var newBeer = req.body; // get the data for the new beer from the request body
	Beer.create(newBeer, (err, beer) => { // Call create() mongoose function to create in database
		if(err){
			throw err;
		}
		res.json(beer);
	});
});

// PUT Http Request (Update) - Update one specific beer
app.put('/api/beers/:_id', (req, res) => {
	var query = {_id: req.params._id}; // get _id parameter from request
	var updatedBeer = req.body; // get the data for the updated beer from the request body
	Beer.findOneAndUpdate(query, updatedBeer, {}, (err, beer) => { // Call create() mongoose function to create new beer in database
		if(err){
			throw err;
		}
		res.json(beer);
	});
});

// DELETE Http Request - Delete one beer by id
app.delete('/api/beers/:_id', (req, res) => {
	var query = {_id: req.params._id};
	Beer.remove(query, (err, beer) => {
		if(err){
			throw err;
		}
		res.json(beer);
	});
});

// Start express web server on port 3000
app.listen(app.get('port'), function() {
  console.log('Web Server started on port ' + app.get('port'));
});