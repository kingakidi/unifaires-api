const { Permission } = require("../models");
const RoleServices = require("../services/role.service");
const PermissionServices = require("../services/permission.service");

const roleServices = new RoleServices();
const permissionServices = new PermissionServices();
exports.index = async function (req, res, next) {
  let permissions = await permissionServices.getAll();

  return res.status(200).send({
    status: "success",
    message: "Permissions fetch successfully",
    data: permissions,
  });
};
exports.store = async function (req, res, next) {
  // check if permission already exist
  let isRole = await roleServices.getRole(req.body.roleId);

  if (!isRole)
    return res.status(400).json({
      success: false,
      message: "Invalid Role Id",
      data: null,
    });

  // check if permission already exist
  const isPermission = await permissionServices.getPermissionTitle(
    req.body.title
  );

  if (isPermission) {
    return res.status(400).send({
      success: false,
      message: `${req.body.title} Permission already exist`,
    });
  } else {
    // add permission

    let resultData = await permissionServices.createPermission(req);

    if (resultData)
      return res.status(201).send({
        success: true,
        message: "permission created successfully",
        data: resultData,
      });
  }
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
