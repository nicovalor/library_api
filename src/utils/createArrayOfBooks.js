const { faker } = require("@faker-js/faker");

const createArrayOfBooks = () => {
    const books = [];
    for (let i = 0; i < 50; i++) {
        const book = {
            id: i,
            name: faker.lorem.words(3),
            release_date: faker.date.past,
            pages: faker.number.int(1500),
            languaje: "English",
            authorId: faker.number.int(49),
            editorialId: faker.number.int(8),
            genre: [],
            users: []
        }
        books.push(book)
    }
    return books;
}

module.exports = createArrayOfBooks;