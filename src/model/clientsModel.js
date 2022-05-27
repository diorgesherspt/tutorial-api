const {Sequelize} = require("sequelize")
const db = require("../db")

function clientsModel(){ db.define("client",{
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING.apply,
        allowNull:false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    }
})
}

module.exports= clientsModel