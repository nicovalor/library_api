const { postEditorial } = require("../controllers/editorialControllers");
const { catchAsync } = require("../utils");

const postEditorialHandler = async (req, res) => {
    const newEditorial = req.body;
    const editorial = postEditorial(newEditorial);
    response(res, 201, editorial);
}

module.exports = {
    postEditorialHandler: catchAsync(postEditorialHandler),
}