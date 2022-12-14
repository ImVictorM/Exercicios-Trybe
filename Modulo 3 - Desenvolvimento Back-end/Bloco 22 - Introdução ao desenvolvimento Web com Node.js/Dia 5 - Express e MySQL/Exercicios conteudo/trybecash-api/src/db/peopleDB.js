const conn = require('./connection');

const insert = (person) => {
  const { firstName, lastName, email, phone } = person;
  const insertQuery = `INSERT INTO people 
  (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`
  const result = conn.execute(insertQuery, [firstName, lastName, email, phone]);
  return result;
};

module.exports = {
  insert,
};