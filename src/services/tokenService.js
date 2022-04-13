const jwt = require('jsonwebtoken');

const SECRET = 'mysecrettoken';

const jwtConfig = {
  algorithm: 'HS256',
};

const generateToken = (data) => {
  const token = jwt.sign({ data }, SECRET, jwtConfig);
  return token;
};

module.exports = generateToken;
