const validation = require("../middlewares/validation.middleware");
const userController = require("../controllers/users.controller");

const express = require("express");
const router = express.Router();

router.get("/", userController.index);
router.post("/", validation.signup, userController.store);
module.exports = router;
