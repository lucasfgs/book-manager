const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Book = sequelize.define("livro", {
  id_livro: {
    type: DataTypes.INTEGER,
    auto_increment: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING
  },
  autor: {
    type: DataTypes.STRING
  },
  genero: {
    type: DataTypes.STRING
  }
});

module.exports = Book;
