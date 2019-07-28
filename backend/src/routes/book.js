const route = require("express").Router();
const Book = require("../model/Book");

const { registerValidaion } = require("../validations/book");

route.get("/", async (req, res) => {
  let book = await Book.findAll();
  res.send(book);
});

route.get("/:id", async (req, res) => {
  let book = await Book.findByPk(req.params.id);
  book ? res.send(book) : res.status(400).send("Book not found");
});

route.post("/create", async (req, res) => {
  // Validations
  let { error } = registerValidaion(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const bookExist = await Book.findOne({ where: { nome: req.body.nome } });
  if (bookExist) return res.status(400).send("This book is already registred!");

  try {
    let book = await Book.create({
      nome: req.body.nome,
      autor: req.body.autor,
      genero: req.body.genero
    });
    res.send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

route.delete("/:id", async (req, res) => {
  let book = await Book.destroy({
    where: {
      id_livro: req.params.id
    }
  });
  if (book > 0) res.status(200).send("Book removed successfully");
  else res.status(400).send("Book does not exist");
});

route.put("/:id", async (req, res) => {
  let book = await Book.update(
    {
      nome: req.body.nome,
      autor: req.body.autor,
      genero: req.body.genero
    },
    {
      where: {
        id_livro: req.params.id
      }
    }
  );
  if (book > 0) res.status(200).send("Book updated successfully");
  else res.status(400).send("Book does not exist");
});
module.exports = route;
