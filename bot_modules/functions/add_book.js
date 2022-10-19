// Importing imports
const {  
	Book, 
	User,
} = require('../modules');

// Adding books to the DB
const addBook = async (ctx) => {
	
	msg = ctx.msg.text;
	book = msg.split('/add ');

	if (book[1] != undefined && book[1] != null) {
		const bookAuthor = book[1].split(' - ')[0];
		const bookTitle = book[1].split(' - ')[1];

		User.findOne({ userid: ctx.from.id })
		.then(user => {
			try {
				const book = new Book({
					userid: user._id,
					title: bookTitle,
					author: bookAuthor
				});
		
				Book.find({
					userid: user._id,
					title: bookTitle,
					author: bookAuthor
				})
					.then(result => {
						if (result.length === 0) {
							book.save()
								.then(result => {
									if (result != null) {
										ctx.reply(`A book (${bookAuthor} - ${bookTitle}) is added!`, { reply_to_message_id: ctx.msg.message_id })
									}
								})
						} else {
							ctx.reply(`A book (${bookAuthor} - ${bookTitle}) is already on your profile!`, { reply_to_message_id: ctx.msg.message_id })
						}
					})
			} catch (err) {
				bot.start();
				console.log(err);
				ctx.reply(err.message);
			} 
		})
	} else {
		bot.start();
		ctx.reply('Please, send the info in the following way:\n/add Author - Title', { reply_to_message_id: ctx.msg.message_id });
	}
}

// Exporting addBook function
module.exports = {
	addBook
}