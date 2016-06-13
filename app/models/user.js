var mongoose = require('mongoose');
	
	module.exports = mongoose.model('User', {
		käyttäjänimi : String,
		salasana : String
	});