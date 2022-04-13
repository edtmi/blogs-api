const loginService = require('../services/loginService');

const create = async (req, res, next) => {
  try {
    const token = await loginService.create(req.body);
  
    return res.status(200).json({ token });  
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};
