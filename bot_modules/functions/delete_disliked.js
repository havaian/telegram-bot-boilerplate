// Importing imports
const { 
	Book, 
	User,
} = require('../modules/imports');

// Delete all disliked
const deleteAllDisliked = (ctx) => {

	user = {
		name: ctx.message.chat.first_name,
		userid: ctx.from.id,
		username: ctx.from.username,
		liked: [],
		disliked: []
	}
	User.findOneAndUpdate({ userid: user.userid }, user)
	.then(result => {
		console.log(result);
		ctx.reply('All disliked books were successfully deleted!', { reply_to_message_id: ctx.msg.message_id, })
	})
	
}

// Exporting deleteAllDisliked function
module.exports = {
	deleteAllDisliked
}