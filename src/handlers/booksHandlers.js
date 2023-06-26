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
        const id = req.query;
        if (!id) {
            const createdBook = await createBook(book);
            res.status(201).json(createdBook);
        }
        else {
            const createdBook = await createBook(book, id);
            res.status(201).json(createdBook);
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = { getBooksHandler, postBookHandler }