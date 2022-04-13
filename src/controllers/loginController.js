const loginService = require('../services/loginService');

const create = async (req, res, next) => {
  try {
    const userCreated = await loginService.create(req.body);
  
    return res.status(200).json(userCreated);  
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};
