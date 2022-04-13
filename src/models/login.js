const Login = (sequelize, DataTypes) => {
  const loginInfo = sequelize.define('Login', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  return loginInfo;
};

module.exports = Login;
