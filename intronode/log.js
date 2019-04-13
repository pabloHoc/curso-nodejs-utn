const emmiter = require('./emitter');
const fs = require('fs');
const LOG_PATH = './logs/log.txt';

const log = (message) => {
    fs.appendFile(LOG_PATH, `\n [${Date()}] ${message}`, (error) => {
        if (error) {
            console.log(error);
        }
    })
}

// Cuando se disparan estos eventos, se ejecuta la funcion log
// con el mensaje correspondiente como parametro

emmiter.on('folder-created', log);
emmiter.on('file-read', log);
emmiter.on('file-written', log);
emmiter.on('error', log);