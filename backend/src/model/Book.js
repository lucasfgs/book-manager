const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Book = sequelize.define("livro", {
  id_livro: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
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
  },
  sinopse: {
    type: DataTypes.STRING
  },
  imgUrl: {
    type: DataTypes.STRING
  }
});

module.exports = Book;
