const jwt = require('jsonwebtoken');

const SECRET = 'mysecrettoken';

const jwtConfig = {
  algorithm: 'HS256',
};

const generateToken = (data) => {
  const token = jwt.sign(data, SECRET, jwtConfig);
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
