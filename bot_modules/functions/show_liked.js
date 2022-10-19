// Importing imports
const { 
	Book, 
	User,
} = require('../modules');

// Show liked books 
const showLiked = async (ctx) => {
	
	var text = 'Here are your liked books:\n';
	let z = 1;
	
	User.findOne({
		userid: ctx.from.id
	})
	.then(result => {
		for (let x = 0; x < result.liked.length; x++) {
			Book.findOne({_id: result.liked[x]})
			.then(book => {
				text += `${z}) ${book.author} - ${book.title}\n`
				z++;
			})
		}
	})
	setTimeout(ctx.reply(text, { reply_to_message_id: ctx.msg.message_id, }), 1000);	
}

// Exporting showLiked function
module.exports = {
	showLiked
}