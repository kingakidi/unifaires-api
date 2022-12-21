const express = require("express");
const router = express.Router();
const { landingValidate } = require("../middlewares/validation.middleware");
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
  getCourseLanding,
  postCourseLanding,
} = require("../controllers/courses.controller");

router.get("/", index);
router.post("/", store);
router.put("/:id", update);
router.delete("/:id", destroy);

// Course Landings
router.get("/landing", getCourseLanding);
router.post("/landing", isLogin, landingValidate, postCourseLanding);

router.get("/:id", single);

module.exports = router;
