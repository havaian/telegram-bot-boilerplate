// Importing imports
const { 
	Book, 
	User,
} = require('../modules');

const { likeMenu } = require('../menus/like_menu')

// Book feed
const getFeed = (ctx) => {

	console.log(ctx.message)

	User.findOne({ userid: ctx.from.id })
	.then(result => {
		Book.find({ userid: { $ne: result._id } }).exec()
		.then(result => {
			if (result != undefined && result != null && result != [] && result.length > 0) {
				for (let x = 0; x < 1; x++) {
					var text = `${result[x].author} - ${result[x].title}\n`;
				}
				ctx.reply(text, { reply_markup: likeMenu, reply_to_message_id: ctx.msg.message_id, });
			} else {
				ctx.reply('Unfortunately, we could not find any book for your feed. Please, come back later', { reply_to_message_id: ctx.msg.message_id, })
			}
		});	
	})
  
}

// Exporting getFeed function
module.exports = {
	getFeed
}