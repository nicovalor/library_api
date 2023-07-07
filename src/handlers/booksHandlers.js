const { getAllBooks, createBook } = require("../controllers/booksControllers");


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
        const book = req.body;
        const { authorId, editorialName } = req.query;
        if (!authorId) {
            const createdBook = await createBook(book);
            res.status(201).json(createdBook);
        }
        else {
            const createdBook = await createBook(book, authorId, editorialName);
            res.status(201).json(createdBook);
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = { getBooksHandler, postBookHandler }