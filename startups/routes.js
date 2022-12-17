module.exports = function (app) {
  const roles = require("../routes/roles");
  const permissions = require("../routes/permissions");
  const users = require("../routes/users");
  const auth = require("../routes/auth");
  const courses = require("../routes/courses");
  const media = require("../routes/media");

  app.use("/roles", roles);
  app.use("/permissions", permissions);
  app.use("/users", users);
  app.use("/auth", auth);
  app.use("/courses", courses);
  app.use("/media", media);

  app.use(function (err, req, res, next) {
    return res.status(500).send({
      status: "Server Error",
      message: err.message,
    });
  });
};
