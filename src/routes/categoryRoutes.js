const categoryRoute = require('express').Router();

const categoryController = require('../controllers/categoryController');

const authorization = require('../middlewares/authorization');

categoryRoute.route('/')
  .post(authorization, categoryController.create)
  .get(authorization, categoryController.getCategories);

module.exports = categoryRoute;
