var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.cookie("age",15);
  res.render("index");
});
router.get("/read",function(req,res){
  console.log(req.cookies.age);
  res.send("file send")
})

router.get("/delete",function(req,res){
  res.clearCookie("age");
  res.send("clear format")
})

module.exports = router;
