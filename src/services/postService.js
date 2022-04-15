const { BlogPost, Category, User } = require('../models');
const postSchema = require('../schemas/postSchema');

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
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
    where: { id } });

  if (!result) throw statusError(404, 'Post does not exist');

  return result;
};

module.exports = {
  create,
  getAll,
  getPostById,
};
