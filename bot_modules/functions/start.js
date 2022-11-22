// Importing imports
const { 
	Bot, 
	SampleModel, 
	UserModel,
} = require('../modules');

// Creating db for each user to store liked / disliked books of each user
const save_user = (ctx) => {

	try {
		user = new UserModel({
			name: ctx.message.chat.first_name,
			userid: ctx.from.id,
			username: ctx.from.username,
		})
		console.log('This is the demonstration function');
		console.log(user);
	} catch (error) {
		bot.start();
		console.log(err);
		ctx.reply(err.message);
	} 
	
}

// Exporting createDB function
module.exports  = {
	save_user
}