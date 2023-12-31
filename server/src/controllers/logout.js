const logout = async (req, res, next) => {
    req.session.destroy(error => {
        if (error) {
            next(error)
        } else {
            res.sendStatus(200);
        }
    })
}

module.exports = logout