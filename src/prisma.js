const { PrismaClient } = require("@prisma/client");
const { DATABASE_URL } = process.env;

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: DATABASE_URL,
        },
    }
});

module.exports = prisma;