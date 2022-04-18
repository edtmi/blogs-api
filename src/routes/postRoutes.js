const postRoute = require('express').Router();

const postController = require('../controllers/postController');

postRoute.route('/')
  .post(postController.create)
  .get(postController.getAll);

/* Inversão na rota do express, conforme  a dúvida tirada com o Rafa na mentoria e lida na seguinte doc: 
  http://expressjs.com/en/guide/routing.html#route-paths
*/
postRoute.route('/search')
  .get(postController.getPostByQueryString);

postRoute.route('/:id')
  .get(postController.getPostById);

module.exports = postRoute;
