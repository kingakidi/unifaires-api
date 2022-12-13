const try_catch = require("../middlewares/trycatch");
const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth.controller");
const validate = require("../middlewares/validation.middleware");

router.post("/login", validate.login, try_catch(auth.login));

module.exports = router;
