const express = require("express");
const router = require("./routes/index");
const cors = require("cors");
const morgan = require("morgan");
const server = express();

//middleware
server.use(express.json()); //Transforma en un obj la req recibida
server.use(cors());
server.use(morgan("dev"));

server.use("/rickandmorty", router);
server.use("*", (req, res) => {
  res.status(404).json({ error: "No se encontro la URL" });
});

module.exports = server;
