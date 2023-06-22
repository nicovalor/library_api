const getAllBooks = require("../controllers/booksControllers");

const getBooksHandler = async (req, res) => {
    try {
        const allBooks = await getAllBooks();
        res.status(200).json(allBooks)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { getBooksHandler }