const { getAllBooks, bulkCreateBooks } = require("../controllers/booksControllers");
const createArrayOfBooks = require("../utils/createArrayOfBooks")


const getBooksHandler = async (req, res) => {
    try {
        const allBooks = await getAllBooks();
        res.status(200).json(allBooks)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const bulkCreateBooksHandler = async (req, res) => {
    try {
        const books = createArrayOfBooks()
        bulkCreateBooks(books)

        res.status(201).json(books)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
module.exports = { getBooksHandler, bulkCreateBooksHandler }