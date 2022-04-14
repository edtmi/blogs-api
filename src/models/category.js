const Category = (sequelize, DataTypes) => {
  const categoryInfo = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  return categoryInfo;
};

module.exports = Category;
