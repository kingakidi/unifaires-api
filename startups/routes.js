module.exports = function (app) {
  const users = require("../routes/users");
  const roles = require("../routes/roles");

  app.use("/roles", roles);
  app.use("/users", users);

  app.use(function (req, res, next) {
    return res.status(500).send({
      status: "Server Error",
      message: "this is catch erro",
      data: [],
    });
  });
};
