const express = require("express");
const router = express.Router();

const {
  isLogin,
  isAdmin,
  isSuperAdmin,
} = require("../middlewares/auth.middlewares");

const {
  index,
  store,
  update,
  destroy,
  single,
} = require("../controllers/courses.controller");

router.get("/", index);
router.post("/", store);
router.put("/:id", update);
router.delete("/:id", destroy);

router.get("/:id", single);

module.exports = router;
