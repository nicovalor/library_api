const prisma = require("../prisma")

const postAuthor = async (data) => {
    const author = await prisma.author.create(data)
    return data;
}

module.exports = { postAuthor };