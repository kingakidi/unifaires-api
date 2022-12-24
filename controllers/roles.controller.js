const { Role } = require("../models");
const roleService = require("../services/role.service");

exports.index = async function (req, res, next) {
  let roles = await roleService.getAll();

  return res.status(200).send({
    message: "Roles Fetch Successfully",
    data: roles,
  });
};
exports.update = async function (req, res, next) {
  // Validate and check if the roles have already exist

  // check if the role actually exist
  const role = await roleService.getRoleById(id);
  if (role) {
    let update = await roleService.update(req);

    if (update)
      return res.status(200).send({
        success: true,
        message: "Role updated successfully",
      });
  } else {
    return res.status(400).send({
      success: false,
      message: "Invalid role id",
    });
  }
};

exports.store = async function (req, res, next) {
  // Save the values into the database

  const { title, description } = req.body;

  const data = {
    title: title,
    description: description,
  };

  // check if title already exist
  let titleCheck = await Role.findOne({ where: { title: title } });

  if (!titleCheck)
    return await Role.create(data).then((result) => {
      return res.status(201).send({
        success: true,
        message: "Role Created Successfully",
        data: result,
      });
    });
  return res.status(400).send({
    success: false,
    message: "Role already exist",
    data: null,
  });
};

exports.destroy = async function (req, res, next) {
  const { id } = req.params;

  const role = await Role.findOne({ where: { id: id } });
  if (role) {
    return await role.destroy().then((result) => {
      return res.status(204).send({
        success: true,
        message: "Role deleted successfully",
        data: null,
      });
    });
  }
  return res.status(400).send({
    success: false,
    message: "Invalid Role",
  });
};

exports.roleById = async function (req, res, next) {
  let { id } = req.params;
  await Role.findOne({ where: { id: id } }).then((result) => {
    if (result)
      return res.status(200).send({
        success: true,
        message: "Role fetch successfully",
        data: result,
      });

    return res.status(200).send({
      success: true,
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
        success: true,
        message: "Roles Fetch successfully",
        data: result,
      });

    return res.status(200).send({
      success: true,
      message: "Roles does not exit",
      data: null,
    });
  });
};
