const userRoute = require('express').Router();

const userController = require('../controllers/userController');

userRoute.route('/')
  .post(userController.create);

module.exports = userRoute;
