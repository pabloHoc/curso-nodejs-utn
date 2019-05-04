const db = require('./../../db/db');
const COLLECTIONS = require('./../../db/collections');
const ObjectId = require('mongodb').ObjectId;

class Controller {
    async getAll(request, response) {
        try {
            const collection = await db.getCollection(COLLECTIONS.ANIMALS);
            const animals = await collection.find({}).toArray();
            
            response.status(200).send({
                success: true,
                message: 'Animals retrieved successfully!',
                data: animals
            });
        } catch (error) {
            console.log(error);
            response.status(500).send({
                success: false,
                message: 'Error while retrieving animals',
                data: db
            });  
        }

    }

    async get(request, response) {
        try {
            const collection = await db.getCollection(COLLECTIONS.ANIMALS);
            const animal = await collection.findOne({_id: ObjectId(request.params.id)});
            
            if (animal) {
                response.status(200).send({
                    success: true,
                    message: 'Animal retrieved successfully!',
                    data: animal
                });
            } else {
                response.status(400).send({
                    success: false,
                    message: 'Animal not found!',
                    data: animal
                });
            }
            
        } catch (error) {
            console.log(error);
            response.status(500).send({
                success: false,
                message: 'Error while retrieving animals',
                data: db
            });  
        }
    }

    async add(request, response) {

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

        try {
            const collection = await db.getCollection(COLLECTIONS.ANIMALS);
            await collection.insertOne({
                name: request.body.name,
                type: request.body.type
            });
            response.status(200).send({
                success: true,
                message: `Animal added successfully`
            });
        } catch(error) {
            console.log(error);
            response.status(500).send({
                success: false,
                message: `Error while adding animal`
            });
        }
    }

    async update(request, response) {
        if (!request.body.name) {
            return response.status(422).send({
                success: 'false',
                message: 'animal is mandatory'
            });
        }

        if (!request.body.type) {
            return response.status(422).send({
                success: 'false',
                message: 'type is mandatory'
            });
        }

        try {
            const collection = await db.getCollection(COLLECTIONS.ANIMALS);
            const result = await collection.update(
                {"_id": ObjectId(request.params.id)}, 
                {"$set": {
                    name: request.body.name,
                    type: request.body.type
                }});
    
            if (result) {
                return response.status(200).send({
                    success: true,
                    message: 'animal updated successfully'
                }); 
            } else {
                return response.status(400).send({
                    success: false,
                    message: 'animal not found'
                });
            }
        } catch(error) {
            console.log(error);

            return response.status(500).send({
                success: false,
                message: 'Something bad happened'
            });
        }
    }

    async delete(request, response) {
        try {
            const collection = await db.getCollection(COLLECTIONS.ANIMALS);
            const animal = await collection.deleteOne({"_id": ObjectId(request.params.id)});
    
            if (animal) {
                return res.status(200).send({
                    success: true,
                    message: 'animal deleted successfully'
                }); 
            } else {
                return res.status(400).send({
                    success: false,
                    message: 'animal not found'
                });
            }
        } catch(error) {
            console.log(error);

            return response.status(500).send({
                success: false,
                message: 'Something bad happened'
            });
        }
    }
}

module.exports = new Controller();