const Joi = require("joi");

exports.signup = async (req, res, next) => {
  const schema = Joi.object({
    fullname: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    permissionId: Joi.number().required(),
  });

  const { error } = schema.validate(req.body);
  // console.log(error.length);
  if (error)
    return res.status(400).json({
      success: false,
      message: "validation failed",
      error: error.details,
      data: null,
    });
  next();
};
exports.login = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().required(),

    password: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: "validation failed",
      error: error.details,
    });
  } else {
    next();
  }
};

exports.add_role = async (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string(),
  });

  const { error } = schema.validate(req.body);

  if (error)
    return res.status(400).json({
      success: false,
      message: "validation failed",
      error: error.details,
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

  const { error } = schema.validate(req.body);
  if (error)
    return res.status(400).json({
      success: false,
      message: "validation failed",
      error: error.details,
      data: null,
    });

  next();
};

exports.landingValidate = async (req, res, next) => {
  const schema = Joi.object({
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

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      sucess: false,
      message: "validation failed",
      error: error.details,
    });
  }

  // check course title exist for the user
  next();
};
