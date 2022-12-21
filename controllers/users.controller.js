const { User } = require("../models");
const PermissionServices = require("../services/permission.service");
const UsersServices = require("../services/users.services");

const permissionServices = new PermissionServices();
const userServices = new UsersServices();

exports.index = async function (req, res, next) {
  let users = await User.findAll();
  return res.status(200).json({
    message: "success",
    data: users,
  });
};

exports.store = async function (req, res, next) {
  let validPermission = await permissionServices.getPermission(
    req.body.permissionId
  );

  if (!validPermission)
    return res.status(400).json({
      success: false,
      message: "invalid permission supply",
      data: null,
    });

  // check email
  let isEmail = await userServices.verifyEmail(req.body.email);

  if (!isEmail) {
    return res.status(409).send({
      status: "failed",
      message: "Email already exist",
      data: null,
    });
  } else {
    // register user
    const userData = await userServices.createUser(req);

    res.status(201).send({
      status: "success",
      message: "User Created Successfully",
      data: userData,
    });
  }
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
