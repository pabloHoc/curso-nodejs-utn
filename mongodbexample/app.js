const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';


const main = async () => {
    try {
        // Obtenemos el cliente
        const client = await mongo.connect(url, {useNewUrlParser: true});
        // Obtenemos la base de datos
        const db = await client.db('cursonode');
        // Obtenemos la coleccion
        const users = await db.collection('users');

        let usersInfo = [{
            name: 'Pedro',
            email: 'pedro@gmail.com',
            age: 27,
            nationatity: 'argentina'
        },{
            name: 'Juan',
            email: 'juan@gmail.com',
            age: 31,
            nationatity: 'argentina'
        },{
            name: 'Ana',
            email: 'ana@gmail.com',
            age: 22,
            nationatity: 'uruguaya'
        },{
            name: 'Jose',
            email: 'jose@gmail.com',
            age: 33,
            nationatity: 'argentina'
        }];

        // Para agregar documentos

        await users.insert({name: 'Pablo'});
        await users.insertMany(usersInfo);

        // Para obtener documentos

        const query = {
            name: 'Jose',
            $or: [
                {
                    age: { $gte: 31}
                },
                { nationatity: 'uruguaya' }
            ]
        }

        const options = {
            limit: 1,
            skip: 2,
            sort: { age: -1 }
        }

        const result = await users.find(query, options).toArray();

        // Para modificar documentos

        await users.updateMany({}, {
            $set: {
                nationatity: 'Brasileña'
            },
            $unset: {
                city: ''
            }
        });

        await users.deleteMany({
            age: {$lte: 31, $gte: 20}
        });

        const result = await users.find(query).toArray();
        console.log(result);

    } catch(error) {
        console.log(error);
    }
}

main();