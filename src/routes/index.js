// Ref ao Tadeu - mentoria;

const routes = require('express').Router();

const userRoutes = require('./userRoutes');
const loginRoutes = require('./loginRoutes');
const categoryRoutes = require('./categoryRoutes');

const authorization = require('../middlewares/authorization');

routes.use('/user', userRoutes);
routes.use('/login', loginRoutes);
routes.use('/categories', authorization, categoryRoutes);

module.exports = routes;
