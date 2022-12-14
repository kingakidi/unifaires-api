const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async function (req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email: email } });

  if (!user)
    return res.status(404).send({
      status: "failed",
      message: "Invalid email address",
    });

  // isActive Account
  if (!user.status)
    return res.status(401).send({
      status: "failed",
      message: "Suspended Account",
    });

  // Check the password
  const db_password = user.password;

  bcrypt.compare(password, db_password, function (err, result) {
    if (!result)
      return res.status(400).send({
        status: "failed",
        message: "Invalid password",
      });

    const payload = {
      fullname: user.fullname,
      permissionId: user.permissionId,
      userId: user.id,
    };

    const token = jwt.sign(payload, process.env.SECRET);

    return res.status(200).send({
      status: "success",
      message: "login successfully",

      data: {
        user: {
          fullname: user.fullname,
          permissionId: user.permissionId,
          userId: user.id,
        },
        token,
      },
    });
  });

  // Get user with email
};
