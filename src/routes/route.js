const express = require("express");
const router = express.Router();
const data = require("../data/data.json");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/posts", (req, res) => {
  res.json(data["posts"]);
});

router.get("/users", (req, res) => {
  res.json(data["users"]);
});

module.exports = router;
