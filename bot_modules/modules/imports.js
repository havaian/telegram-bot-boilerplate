// Importing mongoose
const mongoose = require('mongoose');

// Importing grammy modules
const { Bot } = require('grammy');
const { Menu } = require('@grammyjs/menu');

// Importing models
const Book = require('../../models/book_model');
const User = require('../../models/user_model');

// Importing bent & json modules for creating webhooks for user notifications
const bent = require('bent');
const getJSON = bent('json');

// Importing Google Image Search
const gis = require('g-i-s');

module.exports = {
	mongoose, 
	Bot, 
	Menu, 
	Book, 
	User,
	bent,
	getJSON,
	gis,
}