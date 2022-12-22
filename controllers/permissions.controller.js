const { Permission } = require("../models");
const RoleServices = require("../services/role.service");
const PermissionServices = require("../services/permission.service");

const roleService = new RoleServices();
const permissionService = new PermissionServices();

exports.index = async function (req, res, next) {
  let permissions = await permissionService.getAll();

  return res.status(200).send({
    success: true,
    message: "Permissions fetch successfully",
    data: permissions,
  });
};
exports.store = async function (req, res, next) {
  // check if permission already exist
  let isRole = await roleService.getRole(req.body.roleId);

  if (!isRole)
    return res.status(400).json({
      success: false,
      message: "Invalid Role Id",
      data: null,
    });

  // check if permission already exist
  const isPermission = await permissionService.getPermissionTitle(
    req.body.title
  );

  if (isPermission) {
    return res.status(400).send({
      success: false,
      message: `${req.body.title} Permission already exist`,
    });
  } else {
    // add permission

    let resultData = await permissionService.createPermission(req);

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

  let permission = await permissionService.getPermission(id);
  if (permission)
    return res.status(200).send({
      success: true,
      message: "Permission fetch successfully",
      data: permission,
    });
  return res.status(400).send({
    success: false,
    message: "Invalid permision",
    data: null,
  });
};
