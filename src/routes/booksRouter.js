const { Router } = require("express");
const { getBooksHandler } = require("../handlers/booksHandlers");
const { createBookHandler } = require("../controllers/booksControllers");

const booksRouter = Router()

booksRouter.get("/", getBooksHandler);

booksRouter.post("/", createBookHandler);

module.exports = booksRouter;