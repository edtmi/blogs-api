const loginRoute = require('express').Router();

const loginController = require('../controllers/loginController');

loginRoute.route('/')
  .post(loginController.login);

module.exports = loginRoute;
