const userRoute = require('express').Router();

const userController = require('../controllers/userController');

const authorization = require('../middlewares/authorization');

userRoute.route('/')
  .post(userController.create)
  .get(authorization, userController.getUsers);

userRoute.route('/:id').get(authorization, userController.getUserById);

userRoute.route('/me').delete(authorization, userController.destroy);

module.exports = userRoute;
