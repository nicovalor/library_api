const { Router } = require("express");
const { getBooksHandler } = require("../handlers/booksHandlers")

const booksRouter = Router()

booksRouter.get("/", getBooksHandler);

module.exports = booksRouter;