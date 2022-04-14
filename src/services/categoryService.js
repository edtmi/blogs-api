const { Category } = require('../models');

const categorySchema = require('../schemas/categorySchema');

const statusError = (status, message) => ({
  status,
  message,
});

const create = async (categoryData) => {
  const { error } = categorySchema.validate(categoryData);
  if (error) throw statusError(400, error.message);
  const createCategory = await Category.create(categoryData);

  return createCategory;
};

module.exports = {
  create,
};
