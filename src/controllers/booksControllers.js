const prisma = require("../prisma")

const getAllBooks = async () => {
    const allBooks = await prisma.Book.findMany()
    return allBooks;
}

module.exports = getAllBooks;