const { token } = require('../utils');

function requestToken(req, res) {
  const generatedToken = token.encode(req.body);
  return res.status(200).json({ token: generatedToken });
}

module.exports = {
  requestToken,
};
