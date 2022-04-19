const userService = require('../services/userService');

const create = async (req, res, next) => {
  try {
    const token = await userService.create(req.body);
  
    return res.status(201).json({ token });  
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const result = await userService.getUsers();
  
    return res.status(200).json(result);  
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const result = await userService.getUserById(req.params.id);
  
    return res.status(200).json(result);  
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await userService.destroy(req.user.id);
  
    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getUsers,
  getUserById,
  destroy,
};
