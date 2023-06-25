const { Router } = require("express");
const { postNewAuthor } = require("../handlers/authorsHandlers");

const authorsRouter = Router()

authorsRouter.post("/author", postNewAuthor);

module.exports = authorsRouter;