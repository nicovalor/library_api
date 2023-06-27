const prisma = require("../prisma")

const getAllBooks = async () => {
    const allBooks = await prisma.book.findMany()
    return allBooks;
}

const createBook = async (newBook, authorId, editorialId) => {
    if (!authorId || !editorialId) {
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
                connect: { id: editorialId }
            }
        },
        include: {
            author: true,
            editorial: true,
        }
    });

    return newBookWithId;
}

module.exports = { getAllBooks, createBook };