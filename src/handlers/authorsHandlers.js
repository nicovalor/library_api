const { postAuthor } = require("../controllers/authorsConstrolers")

const postNewAuthor = async (req, res) => {
    try {
        const data = req.body;
        const author = await postAuthor(data);
        res.status(201).json(author);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { postNewAuthor };