const { Role } = require("../models");
const Validator = require("fastest-validator");
const v = new Validator();

function generateError(errors) {
  let error = [];

  errors.forEach((err) => {
    error.push(err.message);
  });

  return error;
}
exports.signup = async (req, res, next) => {
  const schema = {
    fullname: { type: "string", optional: false, max: 100 },
    email: { type: "email", optional: false, max: 100 },
    password: { type: "string", optional: false, max: 255 },
  };

  let { fullname, email, password, imageUrl } = req.body;

  const user = {
    fullname: fullname,
    email: email,
    password: password,
    imageUrl: imageUrl,
  };

  const error = v.validate(user, schema);
  // console.log(error.length);
  if (error.length)
    return res.status(400).send({
      status: "failed",
      message: "validation failed",
      error: error,
      data: null,
    });

  next();
};

exports.add_role = async (req, res, next) => {
  const schema = {
    title: {
      type: "string",
      optional: false,
    },
    description: {
      type: "string",
      optional: true,
    },
  };

  const { title, description } = req.body;
  const role = {
    title,
    description,
  };

  const error = v.validate(role, schema);

  if (error.length)
    return res.status(400).send({
      status: "failed",
      message: "validation failed",
      error: error,
      data: null,
    });

  next();
};

exports.add_permissions = async (req, res, next) => {
  const schema = {
    title: {
      type: "string",
      optional: false,
    },
    description: {
      type: "string",
      optional: true,
    },
    meta: {
      type: "string",
      optional: false,
    },
    roleId: {
      type: "number",
      optional: false,
      positive: true,
      integer: true,
    },
  };

  const { title, description, meta, roleId } = req.body;
  const permissions = {
    title,
    description,
    meta,
    roleId,
  };
  const error = v.validate(permissions, schema);
  if (error.length > 0) {
    return res.status(400).send({
      status: "failed",
      message: "validation failed",
      error: error,
      data: null,
    });
  } else {
    // Check if the roleId exist
    let permissionIdCheck = await Role.findOne({ where: { id: roleId } });
    if (!permissionIdCheck)
      return res.status(400).send({
        status: "failed",
        message: "Invalid Role Id",
        error: true,
        data: null,
      });

    next();
  }
};
