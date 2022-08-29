// Importing imports
const { 
	Book, 
	User,
} = require('../modules/imports');

// Delete all liked
const deleteAllLiked = (ctx) => {

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
		ctx.reply('All liked books were successfully deleted!', { reply_to_message_id: ctx.msg.message_id, })
	})
	
}

// Exporting deleteAllLiked function
module.exports = {
	deleteAllLiked
}