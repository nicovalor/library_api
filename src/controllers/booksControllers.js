const prisma = require("../prisma")

const getAllBooks = async () => {
    const allBooks = await prisma.book.findMany()
    return allBooks;
}

const bulkCreateBooks = async (data) => {
    const books = await prisma.book.createMany(data);
    return data;
}

module.exports = { getAllBooks, bulkCreateBooks };