// valueValidator middleware
module.exports = function valueValidator(req, res, next) {
    const payload = req.body;

    !payload.name ?
    res.status(401).json({ message: "missing required value name" }) :
    next();
}