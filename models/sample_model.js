// Importing imports
const { 
	mongoose, 
	Schema 
} = require('./modules')

// Creating some schema
const sampleSchema = new Schema({
	feature0: {
		type: String,
		required: true
	},
	feature1: {
		type: String,
		required: true
	},
	feature2: {
		type: String,
		required: true
	},
}, { timestamps: true });

const Sample = mongoose.model('Sample', sampleSchema);

// Exporting Book schema
module.exports = Sample;