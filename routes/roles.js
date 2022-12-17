const express = require("express");
const router = express.Router();
const {
  index,
  store,
  update,
  destroy,
  roleById,
  roleByTitle,
} = require("../controllers/roles.controller");
const { isLogin, isAdmin } = require("../middlewares/auth.middlewares");

const { add_role } = require("../middlewares/validation.middleware");
const try_catch = require("../middlewares/trycatch");

router.get("/", [isLogin, isAdmin], try_catch(index));

router.post("/", add_role, try_catch(store));

router.put("/:id", [isLogin, isAdmin], try_catch(update));

router.delete("/:id", [isLogin, isAdmin], try_catch(destroy));

router.get("/title/:title", [isLogin, isAdmin], try_catch(roleByTitle));

router.get("/:id", [isLogin, isAdmin], try_catch(roleById));

module.exports = router;
