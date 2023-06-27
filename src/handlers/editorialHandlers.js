const { postEditorial } = require("../controllers/editorialControllers");

const postEditorialHandler = async (req, res) => {
    try {
        const newEditorial = req.body;
        const editorial = postEditorial(newEditorial);
        res.status(201).json(editorial);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { postEditorialHandler }