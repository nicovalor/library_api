const { postAuthor } = require("../controllers/authorsConstrolers")

const postNewAuthor = async (req, res) => {
    try {
        const author = req.body;
        await postAuthor(author);
        res.status(201).json(author);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { postNewAuthor };