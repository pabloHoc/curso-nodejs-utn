const emitter = require('./../emitter');
const fs = require('fs');
const log = require('../log');

const write = (path, message) => {
    fs.appendFile(path, `\n${message}`, (error) => {
        if (error) {
            console.log('Error al escribir el archivo');
            emitter.emit('error', `Error al escribir el 
            archivo "${path}": ${error}`);
        } else {
            console.log('Archivo escrito exitosamente');
            emitter.emit('file-written', `Se ha escrito "${message}" en el 
            archivo "${path}"`);
        }
    })
}

module.exports = write;