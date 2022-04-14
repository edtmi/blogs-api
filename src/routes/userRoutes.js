const userRoute = require('express').Router();

const userController = require('../controllers/userController');

userRoute.route('/')
  .post(userController.create)
  .get(userController.getUsers);

module.exports = userRoute;
