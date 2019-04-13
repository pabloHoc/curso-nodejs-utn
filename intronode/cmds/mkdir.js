const fs = require('fs');
const emitter = require('./../emitter');

const mkdir = (path) => {
    fs.mkdir(path, (error) => {
        if (error) {
            console.log('Error al crear el directorio');
            emitter.emit('error', `Error al crear el 
            directorio "${path}": ${error}`);
        } else {
            console.log("Se ha creado el directorio con exito");
            emitter.emit('folder-created', `Se ha creado el 
            directorio "${path}"`);
        }
    });
}

module.exports = mkdir;