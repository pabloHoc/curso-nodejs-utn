const roleChecker = (...roles) => {
    return (request, response, next) => {
        if (roles.includes(request.userRole)) {
            next();
        } else {
            return response.status(400).send({
                success: false,
                message: "You don't have the enought rights"
            });
        }
    }
}

module.exports = roleChecker;