// Importing imports
const { 
	mongoose, 
	Schema 
} = require('./modules/imports')

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
	liked: [Schema.Types.ObjectId],
	disliked: [Schema.Types.ObjectId],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// Exporting User schema
module.exports = User;