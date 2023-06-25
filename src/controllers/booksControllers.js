const prisma = require("../prisma")

const getAllBooks = async () => {
    const allBooks = await prisma.book.findMany()
    return allBooks;
}

const createBookHandler = async (newBook) => {
    const book = await prisma.book.create({
        data: newBook,
    })

    return book;
}

module.exports = { getAllBooks, createBookHandler };