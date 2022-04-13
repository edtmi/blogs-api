require('dotenv').config();

const express = require('express');
const routes = require('./routes');

const { PORT } = process.env;

const app = express();

app.use(express.json());

const apiRoutes = express.Router();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

apiRoutes.post('/user', routes.createUser);

app.use(apiRoutes);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
