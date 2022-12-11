module.exports = function (app) {
  const roles = require("../routes/roles");
  const permissions = require("../routes/permissions");
  const users = require("../routes/users");

  app.use("/roles", roles);
  app.use("/permissions", permissions);
  app.use("/users", users);

  app.use(function (err, req, res, next) {
    return res.status(500).send({
      status: "Server Error",
      message: err.message,
    });
  });
};
