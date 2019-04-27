const users = require('./../db/users');
const jsonwebtoken = require('jsonwebtoken');
const { secret } = require('./../configs/config');

const getUser = (username, password) => {
    let userFound;

    users.forEach(user => {
        if (user.username === username && user.password == password) {
            userFound = user;
        }
    });

    return userFound;
}

const loginController = {
    login: (request, response) => {
        const { username, password } = request.body;

        if (!username || !password) {
            return response.status(400).send({
                success: false,
                message: "Username and password are obligatory"
            })
        }

        const user = getUser(username, password);

        if (!user) {
            return response.status(400).send({
                success: false,
                message: "Invalid username or password"
            });
        }

        let token = jsonwebtoken.sign({ role: user.role }, secret, {expiresIn: "24h"});
        
        return response.status(200).send({
            success: true,
            message: "Login successfull",
            token: token
        });
    }
}

module.exports = loginController;