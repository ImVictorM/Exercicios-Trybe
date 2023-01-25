const Joi = require('joi');

const loginPattern = Joi.object({
  username: Joi.string().alphanum().min(5).required(),
  password: Joi.string().min(5).required(),
});

module.exports = {
  loginPattern,
};
