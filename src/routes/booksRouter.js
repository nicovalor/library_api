const { Router } = require("express");
const { getBooksHandler, bulkCreateBooksHandler } = require("../handlers/booksHandlers")

const booksRouter = Router()

booksRouter.get("/", getBooksHandler);
booksRouter.post("/bulkcreate", bulkCreateBooksHandler);

module.exports = booksRouter;