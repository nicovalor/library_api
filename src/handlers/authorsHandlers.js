const { postAuthor } = require("../controllers/authorsConstrolers");
const { catchAsync } = require("../utils");

const postNewAuthor = async (req, res) => {
    const data = req.body;
    const author = await postAuthor(data);
    res.status(201).json(author);
}

module.exports = {
    postNewAuthor: catchAsync(postNewAuthor),
};