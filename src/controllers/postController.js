const postService = require('../services/postService');

const create = async (req, res, next) => {
  try {
    const { dataValues: { id } } = req.user;
    const post = await postService.create(req.body, id);
  
    return res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};
