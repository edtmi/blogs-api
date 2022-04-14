const Category = (sequelize, DataTypes) => {
  const categoryInfo = sequelize.define('Categories', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  return categoryInfo;
};

module.exports = Category;
