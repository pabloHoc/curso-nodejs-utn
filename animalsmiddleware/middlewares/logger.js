const fs = require('fs');
const { promisify } = require('util');

const exists = promisify(fs.exists);
const mkdir = promisify(fs.mkdir);
const write = promisify(fs.appendFile);

const logDir = './logs';
const logPath = './logs/log.txt';

const logger = async (request, response, next) => {
    const log = `[${Date()}] ${request.method}: ${request.path} | ${JSON.stringify(request.body)} \n`;

    try {
        const result = await exists(logDir);
        if (!result) {
            await mkdir(logDir);
        }
        await write(logPath, log);
    } catch(error) {
        console.log(error);
    }

    console.log(log);
    next();
}

module.exports = logger;