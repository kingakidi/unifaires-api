const express = require("express");
const router = express.Router();
const role_controller = require("../controllers/roles.controller");
const validate_middleware = require("../middlewares/validation.middleware");
const try_catch = require("../middlewares/trycatch");

router.get("/", try_catch(role_controller.index));
router.post(
  "/",
  validate_middleware.add_role,
  try_catch(role_controller.store)
);
router.put("/:id", try_catch(role_controller.update));
router.delete("/:id", try_catch(role_controller.destroy));

router.get("/title/:title", try_catch(role_controller.roleByTitle));
router.get("/:id", try_catch(role_controller.roleById));

module.exports = router;
