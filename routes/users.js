const express = require("express");
const router = express.Router();

const { signup } = require("../middlewares/validation.middleware");
const {
  index,
  store,
  update,
  destroy,
} = require("../controllers/users.controller");

const try_catch = require("../middlewares/trycatch");

const { isLogin, isAdmin } = require("../middlewares/auth.middlewares");

router.get("/", [isLogin, isAdmin], try_catch(index));
router.post("/", signup, try_catch(store));

router.put("/:id", [isLogin, isAdmin], try_catch(update));
router.delete("/:id", [isLogin, isAdmin], try_catch(destroy));

module.exports = router;
