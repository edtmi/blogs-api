const PostsCategory = (sequelize, _DataTypes) => {
  const PostCategoryInfo = sequelize.define('PostsCategory',
    {}, {
    timestamps: false,
  });

  PostCategoryInfo.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategoryInfo,
      foreignKey: 'postId',
      otherKey: 'categoryId' });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostCategoryInfo,
      foreignKey: 'categoryId',
      otherKey: 'postId' });
  };

  return PostCategoryInfo;
};

module.exports = PostsCategory;
