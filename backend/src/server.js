const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./model/User");
const Book = require("./model/Book");
const UserBook = require("./model/UserBook");

// Express middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Route middlewares
// const authRoute = require("./routes/auth");
// const testRoute = require("./routes/testMiddleware");
const userRoute = require("./routes/user");

// app.use("/auth", authRoute);
// app.use("/test", testRoute);
app.use("/user", userRoute);

UserBook.create({
  id_usuario: 1,
  id_livro: 1
});

// Create Book
// Book.create({
//   nome: "Anjos e demonios",
//   autor: "Dan Brown",
//   genero: "Suspense"
// });

// Create user
// User.create({
//   nome: "Teste",
//   email: "asd@asd",
//   senha: "qwdqw"
// }).then(user => {
//   console.log(user);
// });

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Server listening on ${process.env.SERVER_PORT}`)
);
