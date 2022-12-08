const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = require("./routes/users");
const admin = require("./routes/admin");
const job = require("./routes/job");
const voucher = require("./voucher");
const business = require("./routes/business");
const roles = require("./routes/roles");
const permissions = require("./routes/permissions");

app.use("/users", users);
app.use("/admin", admin);
app.use("/job", job);
app.use("/voucher", voucher);
app.use("business", business);
app.use("/roles", roles);
app.use("/permissions", permissions);

module.exports = app;
