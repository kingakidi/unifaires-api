const express = require("express");
const router = express();

router.get("/", function (req, res) {
  res.send("working");
});
module.exports = router;
