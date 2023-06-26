const { Router } = require("express");
const { getBooksHandler, postBookHandler } = require("../handlers/booksHandlers");

const booksRouter = Router()

booksRouter.get("/", getBooksHandler);

booksRouter.post("/:id", postBookHandler);

module.exports = booksRouter;