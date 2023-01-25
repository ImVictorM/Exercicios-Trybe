const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '1h',
};

function encode(data) {
  try {
    const payload = {
      ...data,
      admin: false,
    };
    const token = jwt.sign(payload, JWT_SECRET, jwtConfig);
    return token;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function decode(token) {
  try {
    const data = jwt.verify(token, JWT_SECRET);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  encode,
  decode,
};
