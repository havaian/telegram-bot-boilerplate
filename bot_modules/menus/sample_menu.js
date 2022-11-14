// Importing imports
const { Menu } = require('../modules');

// Importing function0 & function1 functions
const { function0 } = require('../functions/function0');
const { function1 } = require('../functions/function1');

// Creating the menu
const likeMenu = new Menu('book-menu')
	.text("✅", (ctx) => function0(ctx))
	.text("🚫", (ctx) => function1(ctx));

module.exports = {
	likeMenu
}