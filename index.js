// Importing the function for keeping the bot alive
const keepAlive = require('./server');

// Importing grammy modules
const { Bot } = require('grammy');
const { Menu } = require('@grammyjs/menu');

// Importing the MongoDB & Mongoose
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');

// Importing dotenv
const dotenv = require('dotenv').config();

// Connecting to MongoDB & Mongoose
mongoose.connect(process.env.db_url);
console.log('MongoDB ✅\nMongoose ✅');

// Import bot & its functions
require('./bot_modules/main');

// Function for keeping the bot running
keepAlive();