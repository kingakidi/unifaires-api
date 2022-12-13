const try_catch = require("../middlewares/trycatch");
const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth.controller");

router.post("/login", try_catch(auth.login));

module.exports = router;
