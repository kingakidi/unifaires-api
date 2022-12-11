const express = require("express");
const router = express.Router();
const route_controller = require("./controllers/route.controller");

router.get("/", route_controller.index);
router.post("/", route_controller.store);
router.put("/:id", route_controller.update);
router.delete("/:id", route_controller.destroy);

exports.index = async function (req, res) {};
exports.store = async function (req, res) {};
exports.update = async function (req, res) {};
exports.destroy = async function (req, res) {};

module.exports = router;
