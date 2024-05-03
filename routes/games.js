const gamesRouter = require('express').Router();

const { findAllGames, findGameById, createGame, updateGame, deleteGame } = require('../middlewares/games');
const { sendAllGames, sendGameById, sendGameCreated, sendGameUpdated, sendGameDeleted } = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', findAllGames, createGame, sendGameCreated);
gamesRouter.get('/games/:id', findGameById, sendGameById);
gamesRouter.put('/games/:id', findGameById, updateGame, sendGameUpdated);
gamesRouter.delete('/games/:id', deleteGame, sendGameDeleted);
module.exports = gamesRouter;
