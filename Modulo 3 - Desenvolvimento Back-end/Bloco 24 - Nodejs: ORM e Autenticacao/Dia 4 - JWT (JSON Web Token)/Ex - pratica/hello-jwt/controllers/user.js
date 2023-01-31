async function requestUser(req, res) {
  const { username, admin } = req.body;
  return res.status(200).json({
    username,
    admin,
  });
}

module.exports = {
  requestUser,
};
