const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required()
    .messages({ 'string.pattern.base': '"email" must be a valid email' }),
  password: Joi.string().min(6).required()
    .messages({ 'string.min': '"password" length must be 6 characters long' }),
  image: Joi.string().required(),
});

module.exports = userSchema;
