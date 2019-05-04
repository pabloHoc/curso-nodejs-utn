const allowedHttpMethods = ["GET", "POST", "PUT", "DELETE"];

const httpMethodChecker = (request, response, next) => {
    if (allowedHttpMethods.includes(request.method)) {
        next();
    } else {
        return response.status(405).send({
            success: false,
            message: `${request.method} method not allowed`
        })
    }
}

module.exports = httpMethodChecker;