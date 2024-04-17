var express = require("express");
var router = express.Router();
var users = require("./users");

router.use(express.urlencoded({ extended: true }));

router.get("/", function (req, res, next) {
  res.render("index");
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const user = new users({
    username: req.body.username,
    date: await new Date()
  });
  try {
    await user.save();
    console.log("User saved successfully:", user);
    res.redirect("/homepage");
  } catch (error) {
    console.error("Error saving user:", error);
    res.render("error");
  }
});

router.get("/homepage", function (req, res) {
  res.render("error");
});

module.exports = router;
