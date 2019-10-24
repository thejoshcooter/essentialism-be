// responseHandler helper 
module.exports = function responseHandler(res, code, message) {
    res.status(code).json({ message: message });
}