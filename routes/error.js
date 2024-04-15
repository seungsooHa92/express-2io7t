var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.status(400).send("Intend Error");
  //   res.send("respond with a resource");
});

module.exports = router;
