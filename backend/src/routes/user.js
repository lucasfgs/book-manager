const route = require("express").Router();
const User = require("../model/User");

route.get("/", async (req, res) => {
  let user = await User.findAll();
  res.send(user);
});

module.exports = route;
