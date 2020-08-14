const mongoose = require('./connection');

const seeds = require('./seeds.json');

const Game = require('../models/Game');

Game.deleteMany({}).then(() => {
	Game.insertMany(seeds).then(() => {
		console.log('done yo!');
		process.exit();
	});
});
