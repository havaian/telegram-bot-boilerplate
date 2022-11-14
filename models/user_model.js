// Importing imports
const { 
	mongoose, 
	Schema 
} = require('./modules')

// Creating user schema
const userSchema = new Schema({
	name: {
		type: String
	},
	userid: {
		type: String,
		required: true
	},
	username: {
		type: String
	},
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// Exporting User schema
module.exports = User;