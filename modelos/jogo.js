const Sequelize = require("sequelize");
const banco = require("../db.js");

const Jogo = banco.define("jogo", {
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
    descricao:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    avaliacao:{
        type: Sequelize.DOUBLE,
        allowNull: false,
        primaryKey: false
    },
    anoLancamento:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: false
    }
});

module.exports = Jogo;