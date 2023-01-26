module.exports = (req, res) => {
  const { admin } = req.body;
  if (admin) {
    return res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Aranha!!' });
  }
  return res.status(403).json({ error: { message: 'Resctricted access' } });
};
