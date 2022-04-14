const User = (sequelize, DataTypes) => {
  const infoUser = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  infoUser.associate = (models) => {
    infoUser.hasMany(models.BlogPost, 
      { foreignKey: 'userId', as: 'posts' });
  };

  return infoUser;
};

module.exports = User;
