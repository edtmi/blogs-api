const PostCategory = (sequelize, _DataTypes) => {
  const PostCategoryInfo = sequelize.define('PostCategory',
    {}, {
    timestamps: false,
  });

  PostCategoryInfo.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategoryInfo,
      foreignKey: 'categoryId',
      otherKey: 'postId' });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostCategoryInfo,
      foreignKey: 'postId',
      otherKey: 'categoryId' });
  };

  return PostCategoryInfo;
};

module.exports = PostCategory;
