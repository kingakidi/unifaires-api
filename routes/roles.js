const express = require("express");
const router = express.Router();
const role_controller = require("../controllers/roles.controller");

router.get("/", role_controller.index);
router.post("/", role_controller.store);
router.put("/:id", role_controller.update);
router.delete("/:id", role_controller.destroy);

router.get("/title/:title", role_controller.roleByTitle);
router.get("/:id", role_controller.roleById);

module.exports = router;
