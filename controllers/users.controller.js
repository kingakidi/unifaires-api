const { User } = require("../models");
const bcrypt = require("bcrypt");

exports.index = async function (req, res, next) {
  let users = await User.findAll();
  return res.status(200).json({
    message: "success",
    data: users,
  });
};

exports.store = async function (req, res, next) {
  let { fullname, email, password, imageUrl } = req.body;

  const hashPassword = await bcrypt.hash(password, 10);
  const user = {
    fullname: fullname,
    email: email,
    password: hashPassword,
    imageUrl: imageUrl,
    permissionId: 1,
  };

  // check email
  await User.findOne({ where: { email: email } }).then(async (result) => {
    if (result) {
      return res.status(409).send({
        status: "failed",
        message: "Email already exist",
        data: null,
      });
    } else {
      {
        await User.create(user)
          .then((result) => {
            // trigger email event

            const { fullname, email, imageUrl, createdAt, updatedAt } = result;
            res.status(201).send({
              status: "success",
              message: "User Created Successfully",
              data: {
                fullname,
                email,
                imageUrl,
                createdAt,
                updatedAt,
              },
            });
          })
          .catch((e) => {
            res.status(500).send({
              status: "failed",
              message: e.message,
              data: null,
            });
          });
      }
    }
  });
};

exports.update = async function (req, res, next) {
  // get id params
  let { id } = req.params;
  const { fullname, imageUrl } = req.body;

  // check user exist
  let user = await User.findOne({ where: { id: id } });

  let data = { fullname, imageUrl };
  if (user)
    return await User.update(data, { where: { id: id } }).then(
      async (result) => {
        return res.status(200).send({
          status: "success",
          message: "Account updated successfully",
          data: [],
        });
      }
    );
  return res.status(400).send({
    status: "failed",
    message: "Invalid User Id",
    data: null,
  });
};

exports.destroy = async function (req, res, next) {
  let { id } = req.params;

  let user = await User.findOne({ where: { id: id } });

  if (user)
    return await user.destroy().then((result) => {
      return res.status(204).send({
        status: "success",
        message: "User deleted successfully",
        data: null,
      });
    });
  return res.status(400).send({
    status: "failed",
    message: "Invalid User id",
  });
};

exports.reset_password = async function (req, res, next) {};
