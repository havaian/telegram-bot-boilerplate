// Importing imports
const { 
	Bot, 
	SampleModel, 
	UserModel,
} = require('../modules');

// Function for demonstration
const function1 = (ctx) => {

	try {
		console.log('This is a sample function1');
	} catch (error) {
		bot.start();
		console.log(err);
		ctx.reply(err.message);
	} 
	
}

// Exporting function0 function
module.exports  = {
	function1
}