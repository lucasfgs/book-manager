const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("usuario", {
  id_usuario: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  senha: {
    type: Sequelize.STRING
  }
});

module.exports = User;
