const prisma = require("../prisma")

const getAllBooks = async () => {
    const allBooks = await prisma.book.findMany()
    return allBooks;
}

const getBookById = async (id) => {
    const book = await prisma.book.findUnique({
        where: { id: id },
    });
    if (!book) {
        throw Error("Book with provided id not found");
    }
    return book;

}

const createBook = async (newBook, authorId, editorialName) => {
    if (!authorId || !editorialName) {
        throw Error("authorId and editorialId are required")
    }

    const newBookWithId = await prisma.book.create({
        data: {
            ...newBook,
            author: {
                connect: {
                    id: authorId
                }
            },
            editorial: {
                connect: { name: editorialName }
            }
        },
        include: {
            author: true,
            editorial: true,
        }
    });

    return newBookWithId;
}

module.exports = { getAllBooks, createBook, getBookById };