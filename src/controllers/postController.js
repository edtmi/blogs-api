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

const getAll = async (_req, res, next) => {
  try {
    const result = await postService.getAll();

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const result = await postService.getPostById(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getPostByQueryString = async (req, res, next) => {
  try {
    const result = await postService.getPostByQueryString(req.query.q); 

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
  getPostById,
  getPostByQueryString,
};
