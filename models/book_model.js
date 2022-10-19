// Importing imports
const { 
	mongoose, 
	Schema 
} = require('./modules')

// Creating book schema
const bookSchema = new Schema({
	userid: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

// Exporting Book schema
module.exports = Book;