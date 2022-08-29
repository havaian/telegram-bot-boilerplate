// Importing imports
const {  
	Bot, 
} = require('./modules/imports');

// Creating the bot
const bot = new Bot(process.env.tgTOKEN);

// Importing createDB function
const { createDB } = require('./functions/create_db');

// Handling /start command
bot.command('start', ctx => {
	createDB(ctx);
})

// Importing updateUser function
const { updateUser } = require('./functions/update_user')

// Handling /update command
bot.command('update', ctx => {
	updateUser(ctx);
})

// Importing addBook function
const { addBook } = require('./functions/add_book')

// Handling /add command
bot.command('add', ctx => {
	addBook(ctx);
})

// Importing likeMenu menu
const { likeMenu } = require('./menus/like_menu');

bot.use(likeMenu);

// Importing myBooks function
const { myBooks } = require('./functions/my_books');

// Handling /my_books command
bot.command("books", ctx => {
  myBooks(ctx);
})

// Importing deleteBook function
const { deleteBook } = require('./functions/delete_book')

// Handling /delete command
bot.command("delete", ctx => {
  deleteBook(ctx);
})

// Importing deleteAllBooks function
const { deleteAllBooks } = require('./functions/delete_all')

// Handling /delete_all command
bot.command("delete_all", ctx => {
  deleteAllBooks(ctx);
})

// Importing getFeed function
const { getFeed } = require('./functions/get_feed');

// Handling /get_feed command
bot.command('feed', ctx => {
  getFeed(ctx);
})

// const { showLiked } = require('./functions/show_liked');

// // Handling /liked command
// bot.command('liked', ctx => {
// 	showLiked(ctx);
// })

// const { showDisliked } = require('./functions/show_disliked');

// // Handling /disliked command
// bot.command('disliked', ctx => {
// 	showDisliked(ctx);
// })

// const { deleteAllLiked (ctx) } = require('./functions/delete_liked');

// // Handling '/delete_liked command'
// bot.command('delete_liked', ctx => {
// 	deleteAllLiked(ctx);
// })

// const { deleteAllDisliked } = require('./functions/delete_disliked');

// // Handling '/delete_disliked command'
// bot.command('delete_disliked', ctx => {
// 	deleteAllDisliked(ctx);
// })


bot.start();
console.log('Bot ✅');