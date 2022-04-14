const userService = require('../services/userService');

const create = async (req, res, next) => {
  try {
    const userCreated = await userService.create(req.body);
  
    return res.status(201).json(userCreated);  
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const userCreated = await userService.getUsers();
  
    return res.status(200).json(userCreated);  
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getUsers,
};
