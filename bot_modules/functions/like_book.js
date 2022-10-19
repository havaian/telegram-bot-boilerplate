// Importing imports
const {
	Menu, 
	Book, 
	User,
} = require('../modules');

// Function for liking a book
const likeBook = (ctx) => {

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
					currentUser = { $push: { liked: book._id } };
					User.findOneAndUpdate(id, currentUser)
					.then(result => { 
						User.findById(book.userid)
							.then(bookOwner => {
								text = `Dear ${currentUser.name}, a user @${bookOwner.username} has liked your book (${book.author} - ${book.title}). If you would like to exchange books with this user, we would encourage you for a contact. Otherwise, please ignore this message`
								getJSON(`https://api.telegram.org/bot${process.env.tgTOKEN}/sendMessage?chat_id=${bookOwner.userid}&text=${text}&parse_mode=markdown`);
					ctx.reply('We have notified the owner of this book about that! They will reach out to you if they feel like it!', { reply_to_message_id: ctx.msg.message_id })
							})
					})
				} else {
					ctx.reply('You have already added this book as liked!', { reply_to_message_id: ctx.msg.message_id })
				}
			})
		})	
	})
}

// Exporting likeBook function
module.exports = {
	likeBook
}