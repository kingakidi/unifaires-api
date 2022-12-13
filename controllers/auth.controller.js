const { User } = require("../models");

exports.login = async function (req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email: email } });
  res.send(user);
  // Get user with email
};
