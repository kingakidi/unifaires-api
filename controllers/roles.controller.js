const { Role } = require("../models");

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
