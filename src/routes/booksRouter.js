const { Router } = require("express")

const booksRouter = Router()

booksRouter.get("/books", getBooksHandler);
