const prisma = require("../prisma")

const postEditorial = async (data) => {
    const newEditorial = await prisma.editorial.create({
        data: data,
    })

    return newEditorial;
}

module.exports = { postEditorial };