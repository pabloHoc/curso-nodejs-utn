const controller = require('./controller');
const roleChecker = require('./../../middlewares/roleChecker');
const ROLES = require('./../users/roles');

const routes = [
    {
        method: 'GET',
        url: '/api/v1/animals',
        controller: (...args) => controller.getAll(...args)
    },
    {
        method: 'GET',
        url: '/api/v1/animals/:id',
        controller: (...args) => controller.get(...args)
    },
    {
        method: 'POST',
        url: '/api/v1/animals',
        controller: (...args) => controller.add(...args)
    },
    {
        method: 'PUT',
        url: '/api/v1/animals/:id',
        controller: (...args) => controller.update(...args)
    },
    {
        method: 'DELETE',
        url: '/api/v1/animals/:id',
        middlewares: roleChecker(ROLES.ADMIN),
        controller: (...args) => controller.delete(...args)
    }
]

module.exports = routes;