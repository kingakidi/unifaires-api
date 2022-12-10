const express = require("express");
const router = express.Router();
const role_controller = require("../controllers/roles.controller");

router.get("/", role_controller.index);
router.post("/", role_controller.store);
router.put("/:id", async (req, res) => {});
router.delete("/:id", async (req, res) => {});

router.get("/title/:title", role_controller.roleByTitle);
router.get("/:id", role_controller.roleById);

module.exports = router;
