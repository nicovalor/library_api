const { Router } = require("express");
const booksRouter = require("./booksRouter");

const router = Router();
router.use("/books", booksRouter);

module.exports = router;