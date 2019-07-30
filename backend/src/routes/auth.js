const app = require("express").Router();
const User = require("../model/User");
const jwt = require("jsonwebtoken");

const { decryptPassword } = require("../utils");

app.post("/login", async (req, res) => {
  try {
    let user = await User.findAll({ where: { email: req.body.email } });
    let token = jwt.sign({ id: user[0].id_usuario }, process.env.JWT_SECRET);
    if (decryptPassword(req.body.senha, user[0].senha))
      res.status(200).json({ token, user_id: user[0].id_usuario });
    else
      res.status(400).json({
        error: {
          message: "Incorrect password"
        }
      });
  } catch {
    res.status(400).json({
      error: {
        message: "E-mail not found"
      }
    });
  }
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
