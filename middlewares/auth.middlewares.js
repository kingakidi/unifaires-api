const jwt = require("jsonwebtoken");

exports.isLogin = async function (req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token)
      return res.status(400).send({
        error: true,
        message: "No token supply",
      });

    let auth_token = token.split(" ")[1];
    const verify = jwt.verify(auth_token, process.env.SECRET);

    if (verify) {
      next();
    }
  } catch (error) {
    return res.status(401).send({
      error: true,
      message: "Invalid token supply",
    });
  }
};

exports.isAdmin = async function (req, res, next) {
  // verify if the token contains admin previlege
  next();
};

exports.isSuperAdmin = async function (req, res, next) {};

exports.isEnroll = async function (req, res, next) {};

exports.isCourseOwn = async function (req, res, next) {};
