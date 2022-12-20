const conn = require('./connection');

const insert = (person) => {
  const { firstName, lastName, email, phone } = person;
  const insertQuery = `INSERT INTO people 
  (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`
  const result = conn.execute(insertQuery, [firstName, lastName, email, phone]);
  return result;
};

const findAll = () => conn.execute('SELECT * FROM people');

const findById = (id) => conn.execute('SELECT * FROM people WHERE id = ?', [id]);

const update = (person, id) => conn.execute(
  `UPDATE people 
    SET first_name = ?, last_name = ?, email = ?, phone = ? WHERE id = ?`,
  [person.firstName, person.lastName, person.email, person.phone, id],
);

const remove = (id) => conn.execute('DELETE FROM people WHERE id = ?', [id]);

module.exports = {
  insert,
  findAll,
  findById,
  update,
  remove
};