const gamesRouter = require('express').Router();

const { findAllGames, findGameById, createGame } = require('../middlewares/games');
const { sendAllGames, sendGameById, sendGameCreated } = require('../controllers/games');



gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', findAllGames, createGame , sendGameCreated);
gamesRouter.get('/games/:id', findGameById, sendGameById );
module.exports = gamesRouter;
