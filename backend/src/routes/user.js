const route = require("express").Router();
const User = require("../model/User");

const { encryptPassword, decryptPassword } = require("../utils");
const { registerValidaion } = require("../validations/user");

route.get("/", async (req, res) => {
  let user = await User.findAll();
  res.send(user);
});

route.get("/:id", async (req, res) => {
  let user = await User.findByPk(req.params.id);
  res.send(user);
});

route.post("/create", async (req, res) => {
  // Validations
  let { error } = registerValidaion(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExist = await User.findOne({ where: { email: req.body.email } });
  if (emailExist)
    return res.status(400).send("This email is already registred!");

  try {
    let user = await User.create({
      nome: req.body.nome,
      email: req.body.email,
      senha: encryptPassword(req.body.senha)
    });
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

route.delete("/:id", async (req, res) => {
  let user = await User.destroy({
    where: {
      id_usuario: req.params.id
    }
  });
  if (user > 0) res.status(200).send("User removed successfully");
  else res.status(400).send("User does not exist");
});

route.put("/:id", async (req, res) => {
  let user = await User.update(
    {
      senha: encryptPassword(req.body.senha),
      nome: req.body.nome,
      email: req.body.email
    },
    {
      where: {
        id_usuario: req.params.id
      }
    }
  );
  if (user > 0) res.status(200).send("User updated successfully");
  else res.status(400).send("User does not exist");
});
module.exports = route;
