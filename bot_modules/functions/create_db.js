// Importing imports
const { 
	Bot, 
	Book, 
	User,
} = require('../modules');

// Creating db for each user to store liked / disliked books of each user
const createDB = (ctx) => {

	try {
		user = new User({
			name: ctx.message.chat.first_name,
			userid: ctx.from.id,
			username: ctx.from.username,
			liked: [],
			disliked: []
		})

		User.findOne({
			userid: ctx.from.id,
		})
		.then(result => {
					if (result.length === 0) {
						user.save()
							.then(result => {
								if (result != null) {
									ctx.reply(`Welcome, ${ctx.message.chat.first_name}!`, { reply_to_message_id: ctx.msg.message_id })
								}
							})
					} else {
						ctx.reply(`Welcome back  ${ctx.message.chat.first_name}!`, { reply_to_message_id: ctx.msg.message_id })
						if (result.username === undefined || result.username === null) {
							ctx.reply('We would really like you to add a username to your account so that people with whom you would want to exchange books could easily respond to you! \n\nOnce you update your username, please feel free to command /update so that I can update your credentials in our system', { reply_to_message_id: ctx.msg.message_id })
						}
			}
		})
	} catch (error) {
		bot.start();
		console.log(err);
		ctx.reply(err.message);
	} 
	
}

// Exporting createDB function
module.exports  = {
	createDB
}