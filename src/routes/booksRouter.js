const { Router } = require("express");
const { getBooksHandler, postBookHandler, getBooksByIdHandler } = require("../handlers/booksHandlers");

const booksRouter = Router()

booksRouter.get("/", getBooksHandler);

booksRouter.get("/:id", getBooksByIdHandler);

booksRouter.post("/", postBookHandler);

module.exports = booksRouter;