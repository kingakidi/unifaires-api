const { Role } = require("../models");

// Validations and Authentication middleware
exports.index = async function (req, res, next) {
  let roles = await Role.findAll();
  return res.status(200).send({
    message: "Roles Fetch Successfully",
    data: roles,
  });
};
exports.update = async function (req, res, next) {
  // Validate and check if the roles have already exist

  let { id } = req.params;
  let { title, description } = req.body;
  const data = {
    title,
    description,
  };

  // check if the role actually exist
  const role = await Role.findOne({ where: { id: id } });
  if (role) {
    await Role.update(data, { where: { id: id } }).then((result) => {
      return res.status(200).send({
        status: "success",
        message: "Role updated successfully",
      });
    });
  }

  return res.status(400).send({
    status: "failed",
    message: "Invalid role id",
  });
};

exports.store = async function (req, res, next) {
  // Save the values into the database

  const { title, description } = req.body;

  const data = {
    title: title,
    description: description,
  };

  await Role.create(data).then((result) => {
    return res.status(201).send({
      status: "success",
      message: "Role Created Successfully",
      data: result,
    });
  });
};

exports.destroy = async function (req, res, next) {
  const { id } = req.params;

  const role = await Role.findOne({ where: { id: id } });
  if (role) {
    return await role.destroy().then((result) => {
      return res.status(204).send({
        status: "success",
        message: "Role deleted successfully",
        data: null,
      });
    });
  }
  return res.status(400).send({
    status: "failed",
    message: "Invalid Role",
  });
};

exports.roleById = async function (req, res, next) {
  let { id } = req.params;
  await Role.findOne({ where: { id: id } }).then((result) => {
    if (result)
      return res.status(200).send({
        status: "success",
        message: "Role fetch successfully",
        data: result,
      });

    return res.status(200).send({
      status: "success",
      message: "Roles does not exit",
      data: null,
    });
  });
};

exports.roleByTitle = async function (req, res, next) {
  let { title } = req.params;
  await Role.findOne({ where: { title: title } }).then((result) => {
    if (result)
      return res.status(200).send({
        status: "success",
        message: "Roles Fetch successfully",
        data: result,
      });

    return res.status(200).send({
      status: "success",
      message: "Roles does not exit",
      data: null,
    });
  });
};
