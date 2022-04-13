const { User } = require('../models');

const create = async (req, res) => {
  try {
    const userCreated = await User.create(req.body);
  
    return res.status(201).json(userCreated);  
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  create,
};
