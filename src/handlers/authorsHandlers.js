const { postAuthor } = require("../controllers/authorsConstrolers");
const { catchAsync } = require("../utils");

const postNewAuthor = async (req, res) => {
    const data = req.body;
    const author = await postAuthor(data);
    response(res, 201, author);
}

module.exports = {
    postNewAuthor: catchAsync(postNewAuthor),
};