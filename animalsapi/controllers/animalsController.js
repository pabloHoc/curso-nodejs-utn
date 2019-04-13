const db = require('./../db/db');

const animalsController = {
    getAll: (request, response) => {
        response.status(200).send({
            success: true,
            message: 'Animals retrieved successfully!',
            data: db
        });
    },

    getById: (request, response) => {
        // Obtenemos el id pasado por parámetro
        const id = parseInt(request.params.id, 10);
        
        // Flag para evitar que se seteen headers a la
        // response una vez enviado datos
        let found;
    
        db.forEach((animal) => {
            if (animal.id === id) {
                found = true;
                response.status(200).send({
                    success: true,
                    message: `Animal found`,
                    data: animal
                });
            }
        });
    
        if (!found) {
            response.status(400).send({
                success: false,
                message: `Animal not found`
            });
        }
    },

    add: (request, response) => {

        // Chequeamos que el body de la request
        // tenga los parámetros correspondientes

        if (!request.body.name) {
            return response.status(400).send({
                success: false,
                message: `Animal name is obligatory`
            });
        }
        if (!request.body.type) {
            return response.status(400).send({
                success: false,
                message: `Animal type is obligatory`
            });
        }

        // Agregamos un item a la db y mandamos
        // un mensaje de éxito

        const animal = {
            id: db.length + 1,
            name: request.body.name,
            type: request.body.type
        }
        db.push(animal);
        
        response.status(200).send({
            success: true,
            message: `Animal added successfully`
        });
    },

    update: (request, response) => {
        let animalIndex;
        let found;
        let id = parseInt(request.params.id, 10);

        if (!request.body.name) {
            return response.status(400).send({
                success: false,
                message: `Animal name is obligatory`
            });
        }
        if (!request.body.type) {
            return response.status(400).send({
                success: false,
                message: `Animal type is obligatory`
            });
        }

        // Obtenemos el index del item de la db
        // correspondiente al id pasado por parametro

        db.forEach((animal, index) => {
            if (animal.id === id) {
                found = true;
                animalIndex = index;
            }
        })

        if (!found) {
            return response.status(400).send({
                success: false,
                message: 'Animal not found'
            })   
        }

        // Actualizamos los datos del item de la db
        // correspondiente, según el index que almacenamos

        db[animalIndex].name = request.body.name;
        db[animalIndex].type = request.body.type; 

        return response.status(200).send({
            success: true,
            message: 'Animal updated successfully'
        })
    },

    delete: (request, response) => {
        const id = parseInt(request.params.id, 10);
        let found;

        // Buscamos en la db algún item que tenga el mismo
        // id pasado por parámetro, si lo encontramos, lo borramos
        // de la misma
        
        db.forEach((animal, index) => {
            if (animal.id === id) {
                found = true;
                db.splice(index, 1);
            }
        })

        if (found) {
            return response.status(200).send({
                success: true,
                message: 'Animal deleted successfully'
            });
        } else {
            return response.status(400).send({
                success: false,
                message: 'Animal not found'
            });
        }
    }
}

module.exports = animalsController;