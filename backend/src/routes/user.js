const route = require("express").Router();

const User = require("../model/User");
const Book = require("../model/Book");
const UserBook = require("../model/UserBook");

const { encryptPassword } = require("../utils");
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
  user > 0
    ? res.status(200).send("User removed successfully")
    : res.status(400).send("User does not exist");
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
  user > 0
    ? res.status(200).send("User updated successfully")
    : res.status(400).send("User does not exist");
});

route.get("/myBooks/:id", async (req, res) => {
  let allBooks = await User.findAll({
    attributes: ["id_usuario", "nome"],
    include: [
      {
        model: Book,
        // Pass in the Product attributes that you want to retrieve
        attributes: ["nome", "autor", "genero"],
        through: {
          // This block of code allows you to retrieve the properties of the join table
          model: UserBook,
          attributes: []
        }
      }
    ],
    where: { id_usuario: req.params.id }
  });
  res.send(allBooks);
});

route.post("/addBook", async (req, res) => {
  const { id_usuario, id_livro } = req.body;

  let verifyBook = await UserBook.findAll({
    attributes: ["id_usuario", "id_livro"],
    where: { id_usuario, id_livro }
  });

  if (verifyBook.length > 0) res.status(400).send("User alredy have this book");

  try {
    let savedBook = await UserBook.create({
      id_usuario,
      id_livro
    });
    res.send(savedBook);
  } catch (error) {
    res.status(400).send("Invalid data");
  }
});

route.post("/deleteBook", async (req, res) => {
  const { id_usuario, id_livro } = req.body;
  let deletedBook = await UserBook.destroy({
    where: {
      id_usuario,
      id_livro
    }
  });
  deletedBook > 0
    ? res.status(200).send("Book removed successfully")
    : res.status(400).send("Book or user does not exist");
});
module.exports = route;
