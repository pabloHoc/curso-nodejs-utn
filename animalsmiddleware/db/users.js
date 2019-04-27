const ROLES = require('./../users/roles');

let users = [
    {
        username: 'admin',
        password: 'node',
        role: ROLES.ADMIN
    },
    {
        username: 'pablo',
        password: 'node',
        role: ROLES.USER
    }
];

module.exports = users;