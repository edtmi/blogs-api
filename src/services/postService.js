const { BlogPost, Category } = require('../models');
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

module.exports = {
  create,
};
