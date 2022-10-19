// Importing imports
const { 
	Book, 
	User,
} = require('../modules');

// Updating user credentials
const updateUser = (ctx) => {

	try {
		User.findOne({
			userid: ctx.from.id,
		})
		.then(result => {
			if (result.length != 0) {
				user = {
					name: ctx.message.chat.first_name,
					userid: ctx.from.id,
					username: ctx.from.username,
					liked: result.liked,
					disliked: result.disliked
				}
				User.findByIdAndUpdate(result._id, user)
				.then(result => {
					if (result != null) {
						ctx.reply('Updated your profile successfully!', { reply_to_message_id: ctx.msg.message_id })
					} else {
						ctx.reply('Something went wrong with updating your profile 🤔', { reply_to_message_id: ctx.msg.message_id })
					}
				})
			} else {
				user = {
					name: ctx.message.chat.first_name,
					userid: ctx.from.id,
					username: ctx.from.username,
					liked: [],
					disliked: []
				}
				user.save()
				.then(result => {
					if (result != null) {
						ctx.reply('Updated your profile successfully!', { reply_to_message_id: ctx.msg.message_id })
					} else {
						ctx.reply('Something went wrong with updating  your profile 🤔', { reply_to_message_id: ctx.msg.message_id })
					}
				})
			}
		})
	}
	catch (err) {
		console.log(err)
	}
}

// Exporting updateUser function
module.exports = {
	updateUser
}