const emitter = require('./../emitter');
const fs = require('fs');
const log = require('../log');

const read = (path) => {
    fs.readFile(path, (error, data) => {
        if (error) {
            console.log('Error al leer el archivo');
            emitter.emit('error', `Error al leer el 
            archivo "${path}": ${error}`);
        } else {
            console.log(data.toString());
            emitter.emit('file-read', `Se ha leido el 
            archivo "${path}"`);
        }
    })
}

module.exports = read;