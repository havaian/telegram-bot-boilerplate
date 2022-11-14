// Importing mongoose
const mongoose = require('mongoose');

// Importing grammy modules
const { Bot } = require('grammy');
const { Menu } = require('@grammyjs/menu');

// Importing models
const SomeModel = require('../../models/some_model');
const User = require('../../models/user_model');

// Importing bent & json modules for creating webhooks for user notifications
const bent = require('bent');
const getJSON = bent('json');

// Importing Google Image Search
const gis = require('g-i-s');

// Importing dotenv
const dotenv = require('dotenv').config();

module.exports = {
	mongoose, 
	Bot, 
	Menu, 
	SomeModel, 
	User,
	bent,
	getJSON,
	gis,
	dotenv,
}