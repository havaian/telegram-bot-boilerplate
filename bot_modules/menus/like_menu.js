// Importing imports
const { Menu } = require('../modules/imports');

// Importing likeBook & dislikeBook functions
const { likeBook } = require('../functions/like_book');
const { dislikeBook } = require('../functions/dislike_book');

// Creating the menu
const likeMenu = new Menu('book-menu')
	.text("✅", (ctx) => likeBook(ctx))
	.text("🚫", (ctx) => dislikeBook(ctx));

module.exports = {
	likeMenu
}