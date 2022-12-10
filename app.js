const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = require("./routes/users");
const roles = require("./routes/roles");

app.use("/roles", roles);
app.use("/users", users);

app.use(function (req, res, next) {
  return res.status(500).send({
    status: "Server Error",
    message: "this is catch erro",
    data: [],
  });
});
module.exports = app;
