// Ref ao Tadeu - mentoria;

const routes = require('express').Router();

const userRoutes = require('./userRoutes');
const loginRoutes = require('./loginRoutes');
const categoryRoutes = require('./categoryRoutes');

routes.use('/user', userRoutes);
routes.use('/login', loginRoutes);
routes.use('/categories', categoryRoutes);

module.exports = routes;
