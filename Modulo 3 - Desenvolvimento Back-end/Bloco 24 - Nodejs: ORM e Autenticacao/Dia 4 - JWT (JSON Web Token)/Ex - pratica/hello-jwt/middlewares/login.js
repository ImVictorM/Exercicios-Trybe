const { loginSchema: { loginPattern } } = require('../schemas');

async function validateLogin(req, res, next) {
  const { body: loginData } = req;
  const { error = null } = loginPattern.validate(loginData);
  if (error) {
    return res.status(400).json(error.message);
  }
  return next();
}

module.exports = {
  validateLogin,
};
