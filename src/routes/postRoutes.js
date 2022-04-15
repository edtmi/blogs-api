const postRoute = require('express').Router();

const postController = require('../controllers/postController');

postRoute.route('/')
  .post(postController.create);

module.exports = postRoute;
