const jwt = require('jsonwebtoken');

const SECRET = 'mysecrettoken';

const jwtConfig = {
  algorithm: 'HS256',
};

const generateToken = (data) => {
  const { dataValues } = data;

  const token = jwt.sign({ dataValues }, SECRET, jwtConfig);
  return token;
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, SECRET);
  return decoded;
};

module.exports = {
  generateToken,
  verifyToken,
};
