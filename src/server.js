const express = require("express");
const routes = require("./routes/index");
const { errorCatching } = require("./middlewares/errorCatching")

const server = express();

server.use("/", routes);

server.use(errorCatching)

module.exports = server;