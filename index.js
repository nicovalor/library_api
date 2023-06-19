const server = require("./src/server");
require("dotenv").config();

const { PORT } = process.env
server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})