const { Role, User, Permission } = require("../models");
const Validator = require("fastest-validator");
const Joi = require("joi");
const v = new Validator();

const PermissionServices = require("../services/permission.service");

const permission = new PermissionServices();

exports.signup = async (req, res, next) => {
  const schema = Joi.object({
    fullname: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    permissionId: Joi.number().required(),
  });

  const error = schema.validate(req.body);
  // console.log(error.length);
  if (error.error)
    return res.status(400).json({
      status: "failed",
      message: "validation failed",
      error: error.error.details,
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

  const error = await v.validate(req.body, schema);

  if (error.length)
    return res.status(400).json({
      status: "failed",
      message: "validation failed",
      error: error,
      data: null,
    });

  next();
};

exports.add_permissions = async (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),

    description: Joi.string(),

    meta: Joi.string().required(),

    roleId: Joi.number().required(),
  });

  const error = schema.validate(req.body);
  if (error.error) {
    return res.status(400).json({
      status: "failed",
      message: "validation failed",
      error: error.error.details,
      data: null,
    });
  } else {
    // Check if the roleId exist
    let permissionIdCheck = await Role.findOne({
      where: { id: req.body.roleId },
    });

    if (!permissionIdCheck)
      return res.status(400).json({
        status: "failed",
        message: "Invalid Role Id",
        error: true,
        data: null,
      });

    next();
  }
};

exports.login = async (req, res, next) => {
  const schema = {
    email: {
      type: "email",
      optional: false,
    },

    password: {
      type: "string",
      optional: false,
    },
  };

  const error = await v.validate(req.body, schema);

  if (error.length > 0) {
    return res.status(400).json({
      status: "failed",
      message: "validation failed",
      error: error,
    });
  } else {
    next();
  }
};

exports.landingValidate = async (req, res, next) => {
  const schema = {
    userId: {
      type: "string",
      optional: false,
    },
    title: {
      type: "string",
      optional: false,
    },
    image: {
      type: "string",
      optional: false,
    },
    video: {
      type: "string",
      optional: false,
    },
    description: {
      type: "string",
      optional: false,
    },
    organizationName: {
      type: "string",
      optional: false,
    },
    aboutOrganization: {
      type: "string",
      optional: false,
    },
    scope: {
      type: "string",
      optional: false,
    },
    requirement: {
      type: "string",
      optional: false,
    },

    target: {
      type: "string",
      optional: false,
    },
    lang: {
      type: "string",
      optional: false,
    },
    level: {
      type: "string",
      optional: false,
    },
  };

  const Schema = Joi.object({
    userId: Joi.number().positive().required(),
    title: Joi.string().required(),
    image: Joi.string().uri().required(),
    video: Joi.string().uri().required(),
    description: Joi.string().required(),
    organizationName: Joi.string().required(),
    aboutOrganization: Joi.string().required(),
    scope: Joi.string().required(),
    requirement: Joi.string().required(),

    target: Joi.string().required(),
    lang: Joi.string().required(),
    level: Joi.string().required(),
  });

  const error = Schema.validate(req.body);

  if (error.error) {
    return res.status(400).json({
      sucess: false,
      message: "validation failed",
      error: error.error.details,
    });
  }

  // check course title exist for the user
  next();
};
