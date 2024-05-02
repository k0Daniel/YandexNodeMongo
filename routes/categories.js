const categoriesRouter = require('express').Router();

const { findAllCategories, findCategoryById, createCategory } = require('../middlewares/categories');
const { sendAllCategories, sendCategoryById, sendCategoryCreated } = require('../controllers/categories');

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post('/categories', findAllCategories, createCategory, sendCategoryCreated);
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById);
module.exports = categoriesRouter;
