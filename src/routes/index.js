// Ref ao Tadeu - mentoria;

const routes = require('express').Router();

const userRoutes = require('./userRoutes');
const loginRoutes = require('./loginRoutes');

const authorization = require('../middlewares/authorization');

routes.use('/user', authorization, userRoutes);
routes.use('/login', loginRoutes);

module.exports = routes;
