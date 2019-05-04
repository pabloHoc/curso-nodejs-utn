const jsonwebtoken = require('jsonwebtoken');
const { secret } = require('./../../configs/config');
const db = require('./../../db/db');
const COLLECTIONS = require('./../../db/collections');
const ROLES = require('./roles');

class Controller {
    async getUser(username) {
        let user;
        
        try {
            const collection = await db.getCollection(COLLECTIONS.USERS);
            user = await collection.findOne({username: username});
        } catch(error) {
            throw error;
        }
    
        return user;
    }
    async signin(request, response) {
        const { username, password } = request.body;

        if (!username || !password) {
            return response.status(400).send({
                success: false,
                message: "Username and password are obligatory"
            })
        }

        const user = await this.getUser(username);

        if (user) {
            return response.status(400).send({
                success: false,
                message: "User already exists"
            });
        }

        try {
            const collection = await db.getCollection(COLLECTIONS.USERS);
            await collection.insertOne({
               username: username,
               password: password,
               role: ROLES.USER
            });
    
            return response.status(200).send({
                success: true,
                message: "User registered"
            });
        } catch(error) {
            console.log(error);
            
            return response.status(500).send({
                success: false,
                message: "Something bad happened"
            });
        }
    }
    async login(request, response) {
        const { username, password } = request.body;

        if (!username || !password) {
            return response.status(400).send({
                success: false,
                message: "Username and password are obligatory"
            })
        }

        const user = await this.getUser(username);

        if (!user || user.password !== password) {
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

module.exports = new Controller();