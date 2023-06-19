const errorCatching = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || message;

    console.error(error);
    res.status(status).json({ error: message });
}

module.exports = { errorCatching };