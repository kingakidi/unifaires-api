const validation = require("../middlewares/validation.middleware");
const user_controller = require("../controllers/users.controller");
const try_catch = require("../middlewares/trycatch");
const express = require("express");
const router = express.Router();

router.get("/", try_catch(user_controller.index));
router.post("/", validation.signup, try_catch(user_controller.store));

router.put("/:id", try_catch(user_controller.update));
router.delete("/:id", try_catch(user_controller.destroy));

module.exports = router;
