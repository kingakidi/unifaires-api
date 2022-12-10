const validation = require("../middlewares/validation.middleware");
const user_controller = require("../controllers/users.controller");

const express = require("express");
const router = express.Router();

router.get("/", user_controller.index);
router.post("/", validation.signup, user_controller.store);

router.put("/:id", user_controller.update);
router.delete("/:id", user_controller.destroy);

module.exports = router;
