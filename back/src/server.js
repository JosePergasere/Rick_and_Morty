const express = require("express");
const router = require("./routes/index");
const cors = require("cors");

const server = express();

server.use(express.json()); //Transforma en un obj la req recibida
server.use(cors());

server.use("/rickandmorty", router);

module.exports = server;
