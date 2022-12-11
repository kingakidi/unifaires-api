const router = require("express").Router();
const permissions_controller = require("../controllers/permissions.controller");
const try_catch = require("../middlewares/trycatch");
router.get("/", try_catch(permissions_controller.index));
router.post("/", try_catch(permissions_controller.store));
router.put("/:id", try_catch(permissions_controller.update));
router.delete("/:id", try_catch(permissions_controller.destroy));

router.get("/:id", try_catch(permissions_controller.getById));

module.exports = router;
