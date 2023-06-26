const prisma = require("../prisma")

const getAllBooks = async () => {
    const allBooks = await prisma.book.findMany()
    return allBooks;
}

const createBook = async (newBook, id) => {
    if (!id) {
        const book = await prisma.book.create({
            data: newBook,
        })
        return book;
    }

    const book = await prisma.book.create({
        data: {
            ...book,
            books: {
                connect: {
                    id: id
                }
            }
        }
    });

    return book;
}

module.exports = { getAllBooks, createBook };