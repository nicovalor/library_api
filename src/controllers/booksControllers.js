const prisma = require("../prisma")

const getAllBooks = async () => {
    const allBooks = await prisma.book.findMany()
    return allBooks;
}

module.exports = { getAllBooks, bulkCreateBooks };