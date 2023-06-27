const Router = require('express');
const { postEditorialHandler } = require('../handlers/editorialHandlers');

const editorialRouter = Router();

editorialRouter.post("/", postEditorialHandler);

module.exports = editorialRouter;