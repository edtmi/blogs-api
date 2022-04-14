const { Login, User } = require('../models');
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

const create = async (userData) => {
  const { error } = loginSchema.validate(userData);
  if (error) throw statusError(400, error.message);

  if (await getEmailandPassword(userData) === null) throw statusError(400, 'Invalid fields');

  const data = await Login.create(userData);
  
  const token = generateToken(data);
  return token;
};

module.exports = {
  create,
};
