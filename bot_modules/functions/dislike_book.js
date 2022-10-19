// Importing imports
const { 
	Book, 
	User,
} = require('../modules');

// Function for disliking a book
const dislikeBook = (ctx) => {

	var text = ctx.update.callback_query.message.text;
	var bookAuthor = text.split(' - ')[0];
	var bookTitle = text.split(' - ')[1];

	User.findOne({ userid: ctx.from.id })
	.then(currentUser => {
		Book.findOne({
			author: bookAuthor,
			title: bookTitle
		})
		.then(book => {
			User.findOne({
				userid: ctx.from.id,
				username: ctx.from.username
			})
			.then(user => {
				var id = currentUser._id;
				if (currentUser.liked.includes(book._id) != true) {
					currentUser = { $push: { disliked: book._id } };
					User.findOneAndUpdate(id, currentUser)
				} else {
					ctx.reply('You have already disliked this book!', { reply_to_message_id: ctx.msg.message_id })
				}
			})
		})	
	})
}

// Exporting dislikeBook function
module.exports = {
	dislikeBook
}