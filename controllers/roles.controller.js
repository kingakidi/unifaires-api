const { Role } = require("../models");

// Validations and Authentication middleware
exports.index = async function (req, res) {
  try {
    let roles = await Role.findAll();
    return res.status(200).send({
      message: "Roles Fetch Successfully",
      data: roles,
    });
  } catch (e) {
    return res.status(500).send({
      error: true,
      data: null,
      message: e.message,
    });
  }
};
exports.update = async function (req, res, next) {
  // Validate and check if the roles have already exist
  try {
    let { id } = req.params;
    let { title, description } = req.body;
    const data = {
      title,
      description,
      updatedAt: new Date(),
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
  } catch (e) {
    next();
  }
};

exports.store = async function (req, res) {
  // Save the values into the database

  try {
    const { title, description } = req.body;

    const data = {
      title: title,
      description: description,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await Role.create(data).then((result) => {
      return res.status(201).send({
        status: "success",
        message: "Role Created Successfully",
        data: result,
      });
    });
  } catch (e) {
    return res.status(500).send({
      error: true,
      data: null,
      message: e.message,
    });
  }
};

exports.destroy = async function (req, res) {
  try {
    const { id } = req.params;

    const role = await Role.findOne({ where: { id: id } });
    if (role) {
      await role.destroy().then((result) => {
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
  } catch (e) {
    next();
  }
};

exports.roleById = async function (req, res) {
  try {
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
  } catch (e) {
    return res.status(500).send({
      error: true,
      data: null,
      message: e.message,
    });
  }
};

exports.roleByTitle = async function (req, res) {
  try {
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
  } catch (e) {
    return res.status(500).send({
      error: true,
      data: null,
      message: e.message,
    });
  }
};
