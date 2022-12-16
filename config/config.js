require("dotenv").config();
const fs = require("fs");

module.exports = {
  development: {
    username: process.env.MYSQL_DB_USERNAME,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB,
    host: process.env.MYSQL_DB_HOST,
    port: 3306,
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  test: {
    username: "",
    password: "",
    database: "",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  production: {
    username: "",
    password: "",
    database: "",
    host: "",
    port: "",
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true,
      ssl: {},
    },
  },
};
