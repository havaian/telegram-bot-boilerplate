// Importing imports
const { 
	Menu, 
	Book, 
	User,
} = require('../modules');

// Show disliked books 
const showDisliked = async (ctx) => {
	
	var text = 'Here are your liked books:\n';
	let z = 1;
	
	User.findOne({
		userid: ctx.from.id
	})
	.then(result => {
		for (let x = 0; x < result.disliked.length; x++) {
			Book.findOne({_id: result.disliked[x]})
			.then(book => {
				text += `${z}) ${book.author} - ${book.title}\n`
				z++;
			})
		}
	})
	setTimeout(ctx.reply(text, { reply_to_message_id: ctx.msg.message_id, }), 1000);	
}

// Exporting showDisliked function
module.exports = {
	showDisliked
}