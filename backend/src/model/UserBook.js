const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const UserBook = sequelize.define("UsuariosLivros", {
  id_usuario: {
    type: DataTypes.INTEGER
  },
  id_livro: {
    type: DataTypes.INTEGER
  }
});

module.exports = UserBook;
