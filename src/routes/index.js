// Ref ao Tadeu - mentoria;

const routes = require('express').Router();

const userRoutes = require('./userRoutes');
const loginRoutes = require('./loginRoutes');

routes.use('/user', userRoutes);
routes.use('/login', loginRoutes);

module.exports = routes;
