// Import mongoose library
var mongoose = require('mongoose');

// Build mongoose Beer Schema
var beerSchema = mongoose.Schema({
	name:{
		type: String, // name of a beer needs to be a string
		required: true // name of a beer is a required field
	},
	brewery:{
		type: String, // brewery name of a beer needs to be a string
		required: true // brewery name of a beer is a required field
	},
	alcoholContent:{
		type: Number, // alcohol content of a beer needs to be a number
		required: true // alochol content of a beer is a required field
	}
});

// export mongoose Beer Schema so it can be imported by other files (i.e. app.js)
var Beer = module.exports = mongoose.model('Beer', beerSchema);