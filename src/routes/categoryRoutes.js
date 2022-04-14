const categoryRoute = require('express').Router();

const categoryController = require('../controllers/categoryController');

categoryRoute.route('/')
  .post(categoryController.create)
  .get(categoryController.getCategories);

module.exports = categoryRoute;
