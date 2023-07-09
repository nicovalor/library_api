const { getAllBooks, createBook, getBookById } = require("../controllers/booksControllers");
const { catchAsync, response } = require("../utils")

const getBooksHandler = async (req, res) => {
    const allBooks = await getAllBooks();
    response(res, 200, allBooks);
}

const getBooksByIdHandler = async (req, res) => {
    const { id } = req.params;
    const book = await getBookById(id);
    response(res, 200, book);
}

const postBookHandler = async (req, res) => {
    const book = req.body;
    const { authorId, editorialId } = req.query;
    if (!authorId || !editorialId) {
        const createdBook = await createBook(book);
        response(res, 201, createdBook);
    }
    else {
        const createdBook = await createBook(book, authorId, editorialId);
        response(res, 201, createdBook);
    }
}


module.exports = {
    getBooksHandler: catchAsync(getBooksHandler),
    postBookHandler: catchAsync(postBookHandler),
    getBooksByIdHandler: catchAsync(getBooksByIdHandler)
}