const { Router } = require("express");
const booksRouter = require("./booksRouter");
const authorsRouter = require("./authorsRouter");
const editorialRouter = require("./editorialRouter");

const router = Router();
router.use("/books", booksRouter);
router.use("/author", authorsRouter);
router.use("/editorial", editorialRouter);

module.exports = router;