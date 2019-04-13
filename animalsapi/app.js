// Dependencias

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const animalsController = require('./controllers/animalsController');

// Middlewares

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Arrancamos el server

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});


// Endpoints

app.get('/api/v1/animals', animalsController.getAll);
app.get('/api/v1/animals/:id', animalsController.getById);
app.post('/api/v1/animals', animalsController.add);
app.put('/api/v1/animals/:id', animalsController.update);
app.delete('/api/v1/animals/:id', animalsController.delete);