const { User } = require('../models');
const userSchema = require('../schemas/userSchema');

const statusError = (status, message) => ({
  status,
  message,
});

const getEmail = async (email) => {
  const result = await User.findOne({ where: { email } });

  return result;
};

const create = async (userData) => {
  const { error } = userSchema.validate(userData);
  if (error) throw statusError(400, error.message);

  if (await getEmail(userData.email)) throw statusError(409, 'User already registered');

  const data = await User.create(userData);
  return data;
};

const getUsers = async () => {
  const result = await User.findAll();
  
  return result;
};

module.exports = {
  create,
  getUsers,
};
