const { User } = require('../models');
const loginSchema = require('../schemas/loginSchema');
const { generateToken } = require('./tokenService');

const statusError = (status, message) => ({
  status,
  message,
});

const getEmailandPassword = async (data) => {
  const result = await User.findOne({ where: 
    { email: data.email, password: data.password },
  });

  return result;
};

const login = async (userData) => {
  const { error } = loginSchema.validate(userData);
  if (error) throw statusError(400, error.message);

  if (await getEmailandPassword(userData) === null) throw statusError(400, 'Invalid fields');

  const result = await getEmailandPassword(userData);

  const token = generateToken({ id: result.id });
  return token;
};

module.exports = {
  login,
};
