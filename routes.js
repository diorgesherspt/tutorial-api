const express = require("express")
const clients =require("./src/controllers/clients")

const routes = express.Router()

routes.get("/clients", clients.findAll)

module.exports = routes