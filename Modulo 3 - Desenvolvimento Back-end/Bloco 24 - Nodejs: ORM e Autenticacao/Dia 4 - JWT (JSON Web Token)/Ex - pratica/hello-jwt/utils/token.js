const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '1h',
};

function isAdmin({ password, username }) {
  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 's3nh4S3gur4???';

  if (password === ADMIN_PASSWORD && username === ADMIN_USERNAME) {
    return true;
  }
  return false;
}

function encode(data) {
  const payload = {
    ...data,
    admin: isAdmin(data),
  };
  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);
  return token;
}

function decode(token) {
  const data = jwt.verify(token, JWT_SECRET);
  return data;
}

module.exports = {
  encode,
  decode,
};
