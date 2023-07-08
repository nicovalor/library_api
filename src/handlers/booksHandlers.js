const { getAllBooks, createBook, getBookById } = require("../controllers/booksControllers");
const { catchAsync } = require("../utils")

const getBooksHandler = async (req, res) => {
    const allBooks = await getAllBooks();
    res.status(200).json(allBooks)
}

const getBooksByIdHandler = async (req, res) => {
    const { id } = req.params;
    const book = await getBookById(id);
    res.status(200).json(book);
}

const postBookHandler = async (req, res) => {
    const book = req.body;
    const { authorId, editorialId } = req.query;
    if (!authorId) {
        const createdBook = await createBook(book);
        res.status(201).json(createdBook);
    }
    else {
        const createdBook = await createBook(book, authorId, editorialId);
        res.status(201).json(createdBook);
    }
}


module.exports = {
    getBooksHandler: catchAsync(getBooksHandler),
    postBookHandler: catchAsync(postBookHandler),
    getBooksByIdHandler: catchAsync(getBooksByIdHandler)
}