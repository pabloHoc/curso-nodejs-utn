const jsonwebtoken = require('jsonwebtoken');
const { secret } = require('./../configs/config');

const tokenChecker = (request, response, next) => {
    let token = request.headers['x-access-token'] || request.headers['authorization'];

    if (!token) {
        return response.status(400).send({
            success: false,
            message: "Authorization token missing"
        })
    }

    if (token.includes('Bearer ')) {
        token = token.slice(7, token.length);
    }

    jsonwebtoken.verify(token, secret, (error, decoded) => {
        if (error) {
            return response.status(400).send({
                success: false,
                message: "Invalid token"
            });
        } else {
            request.userRole = decoded.role;
            next();
        }
    });
}

module.exports = tokenChecker;