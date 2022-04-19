const Sequelize = require('sequelize');
const { BlogPost, Category, User } = require('../models');
const postSchema = require('../schemas/postSchema');
const updatePostSchema = require('../schemas/updatePostSchema');

const statusError = (status, message) => ({
  status,
  message,
});

const create = async (postData, userId) => {
  const { error } = postSchema.validate(postData);
  if (error) throw statusError(400, error.message);

  const { title, content, categoryIds } = postData;
  const categories = await Category.findAll();
  const categoryExist = categoryIds
    .every((category) => categories
      .map(({ id }) => id)
      .includes(category));

  if (!categoryExist) throw statusError(400, '"categoryIds" not found');

  const newPost = await BlogPost.create({ title, content, userId });
  newPost.addCategory(categoryIds);
  return newPost;
};

const getAll = async () => {
  const result = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  return result;
};

const getPostById = async (id) => {
  const result = await BlogPost.findOne({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
    where: { id },
  });

  if (!result) throw statusError(404, 'Post does not exist');

  return result;
};

const getPostByQueryString = async (query) => {
  // Sequelize using 'or' and 'like': https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
  const result = await BlogPost.findAll({ include: [{
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
          through: { attributes: [] },
        }],
      where: {
        [Sequelize.Op.or]: [
            { title: { [Sequelize.Op.like]: `%${query}%` } },
            { content: { [Sequelize.Op.like]: `%${query}%` } },
        ],
      },
    });

  return result;
};

const update = async (blogId, userIdPost, dataPost) => {
  const { title, content, categoryIds } = dataPost;

  const { error } = updatePostSchema.validate({ title, content });
  if (error) throw statusError(400, error.message);

  if (categoryIds) throw statusError(400, 'Categories cannot be edited');

  const result = await BlogPost.findByPk(blogId, {
    include: [
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  if (result.userId !== userIdPost) throw statusError(401, 'Unauthorized user');

  await result.update({ title, content });

  return result;
};

module.exports = {
  create,
  getAll,
  getPostById,
  getPostByQueryString,
  update,
};
