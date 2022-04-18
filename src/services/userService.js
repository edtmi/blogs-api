const { User } = require('../models');
const userSchema = require('../schemas/userSchema');
const { generateToken } = require('./tokenService');

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

  const token = generateToken(data);
  return token;
};

const getUsers = async () => {
  const result = await User.findAll(
    {
      attributes: { exclude: ['password'] },
    },
  );

  return result;
};

const getUserById = async (id) => {
  const result = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  if (!result) throw statusError(404, 'User does not exist');

  return result;
};

const destroy = async (userId) => {
  await User.destroy(
    { where: { id: userId } },
  );
};

module.exports = {
  create,
  getUsers,
  getUserById,
  destroy,
};
