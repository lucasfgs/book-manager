const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("usuario", {
  id_usuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  senha: {
    type: DataTypes.STRING
  }
});

module.exports = User;
