const { Router } = require("express");
const booksRouter = require("./booksRouter");
const authorsRouter = require("./authorsRouter");

const router = Router();
router.use("/books", booksRouter);
router.use("/author", authorsRouter);

module.exports = router;