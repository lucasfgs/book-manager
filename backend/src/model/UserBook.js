const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Book = require("./Book");
const User = require("./User");

const UserBook = sequelize.define("UsuariosLivros", {
  id_usuario: {
    type: DataTypes.INTEGER,
    references: {
      model: "usuarios",
      key: "id_usuario"
    }
  },
  id_livro: {
    type: DataTypes.INTEGER,
    references: {
      model: "livros",
      key: "id_livro"
    }
  }
});
User.belongsToMany(Book, { through: UserBook, foreignKey: "id_usuario" });
Book.belongsToMany(User, { through: UserBook, foreignKey: "id_livro" });

module.exports = UserBook;
