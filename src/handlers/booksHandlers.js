const { getAllBooks, createNewBook } = require("../controllers/booksControllers");


const getBooksHandler = async (req, res) => {
    try {
        const allBooks = await getAllBooks();
        res.status(200).json(allBooks)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const postBookHandler = async (req, res) => {
    try {
        const book = req.body
        await createNewBook(book);
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = { getBooksHandler, postBookHandler }