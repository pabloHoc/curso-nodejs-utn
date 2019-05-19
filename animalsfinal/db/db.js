const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

let db;

class Db {
    async getDb() {
        if (db)
            return db;
        
        const client = await mongo.connect(url, {useNewUrlParser: true});
        db = client.db('animals');
        return db;    
    }
    async getCollection(name) {
        let database = await this.getDb();
        let collection = await database.collection(name);
        return collection;
    }
}

module.exports = new Db();