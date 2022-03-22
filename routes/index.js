var express = require("express");
var router = express.Router();

/* GET home page. */
//1.8 Redirect to catalog
router.get("/", function (req, res) {
  res.redirect("/catalog");
});

module.exports = router;
