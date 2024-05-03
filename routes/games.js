const gamesRouter = require('express').Router();

const { findAllGames, findGameById, createGame, updateGame } = require('../middlewares/games');
const { sendAllGames, sendGameById, sendGameCreated, sendGameUpdated } = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', findAllGames, createGame, sendGameCreated);
gamesRouter.get('/games/:id', findGameById, sendGameById);
gamesRouter.put('/games/:id', findGameById, updateGame, sendGameUpdated);
module.exports = gamesRouter;
