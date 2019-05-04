const controller = require('./controller');

const routes = [
    {
        method: 'POST',
        url: '/api/v1/signin',
        controller: (...args) => controller.signIn(...args)
    },
    {
        method: 'POST',
        url: '/api/v1/login',
        controller: (...args) => controller.login(...args)
    }
]

module.exports = routes;