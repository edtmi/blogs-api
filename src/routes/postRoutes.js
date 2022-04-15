const postRoute = require('express').Router();

const postController = require('../controllers/postController');

postRoute.route('/')
  .post(postController.create)
  .get(postController.getAll);

postRoute.route('/:id')
  .get(postController.getPostById);

module.exports = postRoute;
