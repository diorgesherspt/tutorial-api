const clientsModel = require("../model/clientsModel")

async function findAll(req, res) {
    const clients = await clientsModel.findAll()
    res.json(clients)
}

module.exports={findAll}