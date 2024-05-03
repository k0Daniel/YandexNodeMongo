const categoriesRouter = require('express').Router();

const {
	findAllCategories,
	findCategoryById,
	createCategory,
	updateCategory,
	deleteCategory
} = require('../middlewares/categories');
const {
	sendAllCategories,
	sendCategoryById,
	sendCategoryCreated,
	sendCategoryUpdated,
	sendCategoryDeleted
} = require('../controllers/categories');

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post('/categories', findAllCategories, createCategory, sendCategoryCreated);
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById);
categoriesRouter.put('/categories/:id', updateCategory, sendCategoryUpdated);
categoriesRouter.delete('/categories/:id', deleteCategory, sendCategoryDeleted);
module.exports = categoriesRouter;
