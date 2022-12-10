const Validator = require("fastest-validator");

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

  const v = new Validator();

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
