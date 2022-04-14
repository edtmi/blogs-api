const categoryService = require('../services/categoryService');

const create = async (req, res, next) => {
  try {
    const categoryCreated = await categoryService.create(req.body);
  
    return res.status(201).json(categoryCreated);  
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};
