const verifyToken = require('../services/tokenService');

const authorizationToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) res.status(401).json({ message: 'Token not found' });

  try {
    const payload = verifyToken.verifyToken(authorization);

    req.user = payload;
    return next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authorizationToken;
