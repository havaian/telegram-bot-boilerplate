// Importing imports
const { 
	Book, 
	User,
} = require('../modules/imports');

// Delete one book
const deleteBook = (ctx) => {
	
	msg = ctx.msg.text;
	book = msg.split('/delete ');

	if (book[1] != undefined && book[1] != null) {
		const bookAuthor = book[1].split(' - ')[0];
		const bookTitle = book[1].split(' - ')[1];

		try {
			
			const book = new Book({
				userid: ctx.from.id,
				username: ctx.from.username,
				title: bookTitle,
				author: bookAuthor
			});
	
			Book.findOne({
				userid: ctx.from.id,
				username: ctx.from.username,
				title: bookTitle,
				author: bookAuthor
			})
				.then(result => {
					if (result.length != 0) {
						Book.deleteOne({
							userid: ctx.from.id,
							username: ctx.from.username,
							title: bookTitle,
							author: bookAuthor
						})
							.then(result => {
								if (result != null) {
									ctx.reply(`A book (${bookAuthor} - ${bookTitle}) is deleted!`, { reply_to_message_id: ctx.msg.message_id })
								}
							})
					} else {
						ctx.reply(`There is no such book (${bookAuthor} - ${bookTitle})!`, { reply_to_message_id: ctx.msg.message_id })
					}
				})
		} catch (err) {
			bot.start();
			console.log(err);
			ctx.reply(err.message);
		} 
	} else {
		bot.start();
		ctx.reply('Please, send the info in the following way:\n/delete Author - Title', { reply_to_message_id: ctx.msg.message_id });
	}
	
}

// Exporting deleteBook function
module.exports = {
	deleteBook
}