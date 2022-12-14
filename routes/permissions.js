const express = require("express");
const router = express.Router();

const {
  index,
  store,
  update,
  destroy,
  getById,
} = require("../controllers/permissions.controller");

const try_catch = require("../middlewares/trycatch");
const { add_permissions } = require("../middlewares/validation.middleware");
const { isLogin, isAdmin } = require("../middlewares/auth.middlewares");

router.get("/", [isLogin, isAdmin], try_catch(index));

router.post("/", [isLogin, isAdmin], add_permissions, try_catch(store));

router.put("/:id", [isLogin, isAdmin], try_catch(update));

router.delete("/:id", [isLogin, isAdmin], try_catch(destroy));

router.get("/:id", [isLogin, isAdmin], try_catch(getById));

module.exports = router;
