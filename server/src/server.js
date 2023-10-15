const express = require("express");
const primaryRouter = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(primaryRouter);

module.exports = server;
