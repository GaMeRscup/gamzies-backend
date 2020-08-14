const mongoose = require('../db/connection');

const GameSchema = new mongoose.Schema({
	title: String,
	url: String,
	description: String,
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;
