// Importing imports
const { 
	Book, 
	User,
} = require('../modules');

// Getting user's books from DB
const myBooks = (ctx) => {

	var text = 'Here are your books:\n';
	let z = 1;

	User.findOne({ userid: ctx.from.id })
	.then(result => {
		Book.find({ userid: result._id }).exec()
		.then(result => {
			for (let x = 0; x < result.length; x++) {
				text += `${z}) ${result[x].author} - ${result[x].title}\n`;
				z++;
			}
			ctx.reply(text, { reply_to_message_id: ctx.msg.message_id });
		})
	})
	
}

// Exporting myBooks function
module.exports = {
	myBooks
}