const express = require('express');
const gamesController = require('./controllers/games');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.redirect('/api/gamez');
});
app.use('/api/gamez', gamesController);

app.listen(3000, () => console.log('pimpin on 3000'));
