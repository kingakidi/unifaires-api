const { Permission } = require("../models");

exports.index = async function (req, res, next) {
  let permissions = await Permission.findAll();

  return res.status(200).send({
    status: "success",
    message: "Permissions fetch successfully",
    data: permissions,
  });
};
exports.store = async function (req, res, next) {
  let { title, meta, description } = req.body;
  let data = {
    title,
    meta,
    description,
    roleId: 8,
  };

  await Permission.create(data).then((result) => {
    return res.status(201).send({
      status: "success",
      message: "Permission created successfully",
      data: result,
    });
  });
};
exports.update = async function (req, res) {};
exports.destroy = async function (req, res) {};

exports.getById = async function (req, res, next) {
  let { id } = req.params;
  console.log(id);
  let permission = await Permission.findOne({ where: { id: id } });
  if (permission)
    return res.status(200).send({
      status: "success",
      message: "Permission fetch successfully",
      data: permission,
    });
  return res.status(400).send({
    status: "failed",
    message: "Invalid permision",
    data: null,
  });
};
