const { Router } = require("express")

const booksRouter = Router()

booksRouter.get("/", getBooksHandler);

module.exports = booksRouter;