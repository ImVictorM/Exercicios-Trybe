const { token } = require('../utils');

module.exports = (req, res, next) => {
  try {
    const { headers: { authorization } } = req;
    if (authorization === 'Bearer undefined') {
      return res.status(401).json({ error: { message: 'Token not found' } });
    }
    const tokenData = token.decode(authorization);
    req.body = tokenData;
    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: { message: error.message } });
  }
};