// Importing imports
const {  
	Bot,
	dotenv
} = require('./modules');

// Creating the bot
const bot = new Bot(process.env.tg_token);

// Importing createDB function
const { save_user } = require('./functions/save_user');

// Handling /start command
bot.command('start', ctx => {
	save_user(ctx);
});

// Importing updateUser function
const { function0 } = require('./functions/function0')

// Handling /function0 command
bot.command('function0', ctx => {
	function0(ctx);
});

// Importing function1 function
const { function1 } = require('./functions/function1')

// Handling /add command
bot.command('function1', ctx => {
	function1(ctx);
});

// Importing menu
const { menu } = require('./menus/sample_menu');

// Ordering script to use the menu
bot.use(menu);

// Launching bot
bot.start();
console.log('Bot ✅');