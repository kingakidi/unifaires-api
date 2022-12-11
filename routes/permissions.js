const router = require("express").Router();
const permissions_controller = require("../controllers/permissions.controller");

router.get("/", permissions_controller.index);
router.post("/", permissions_controller.store);
router.put("/:id", permissions_controller.update);
router.delete("/:id", permissions_controller.destroy);

router.get("/:id", permissions_controller.getById);

module.exports = router;
