const Sequelize = require("sequelize");
const Jogo = require("./jogo.js");
const banco = require("../db.js");

const Empresa = banco.define("empresa", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    cnpj:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    }
});
Empresa.hasMany(Jogo)
module.exports = Empresa;