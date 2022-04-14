const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const apiRoutes = require('../src/routes');
const errorMidlleware = require('../src/middlewares/errorMidlleware');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(apiRoutes);
app.use(errorMidlleware);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
