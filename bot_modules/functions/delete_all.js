// Importing imports
const { 
	Book, 
	User,
} = require('../modules');

// Delete all books
const deleteAllBooks = (ctx) => {
	
	Book.deleteMany({ userid: ctx.from.id })
	.then(result => {
		if (result.deletedCount == 1) {
			ctx.reply(`${result.deletedCount} book is deleted!`, { reply_to_message_id: ctx.msg.message_id });
		} else {
			ctx.reply(`${result.deletedCount} books are deleted!`, { reply_to_message_id: ctx.msg.message_id });	
		}
	})
	.catch(err => {
		console.log(err);
		ctx.reply(err.message, { reply_to_message_id: ctx.msg.message_id });
	})
	
}

// Exporting deleteAllBooks function
module.exports = {
	deleteAllBooks
}