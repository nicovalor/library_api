const prisma = require("../prisma")

const postAuthor = async (authorData) => {
    const author = await prisma.author.create({
        data: authorData,
    });
    return author;
}

module.exports = { postAuthor };