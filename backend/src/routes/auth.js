const app = require("express").Router();
const User = require("../model/User");
const jwt = require("jsonwebtoken");

const { decryptPassword } = require("../util");

app.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    if (decryptPassword(req.body.password, user.password))
      res.status(200).json({ token, user_id: user._id });
    else
      res.status(400).json({
        error: {
          message: "Incorrect password"
        }
      });
  } else
    res.status(400).json({
      error: {
        message: "E-mail not found"
      }
    });
});

app.post("/verify", (req, res) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access denied");

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    res.send(verified);
  } catch (error) {
    res.status(400).send("Invalid token");
  }
});

module.exports = app;
