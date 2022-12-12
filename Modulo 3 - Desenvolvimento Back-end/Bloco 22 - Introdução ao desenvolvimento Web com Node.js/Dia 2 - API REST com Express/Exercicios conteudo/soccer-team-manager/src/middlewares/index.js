function existingId (req, res, next) {
  const { id } = req.params;
  const teamExists = teams.some(({ id: teamId }) => Number(teamId) === Number(id));
  if (!teamExists) {
    return res.status(400).json({ message: 'Team not found, id must be a valid number' });
  }
  return next();
}

function validateTeam (req, res, next) {
  const requiredProperties = ['name', 'initials'];
  if (requiredProperties.every((property) => property in req.body)) {
    next();
  } else {
    res.sendStatus(400);
  }
}

module.exports = {
  existingId,
  validateTeam
}