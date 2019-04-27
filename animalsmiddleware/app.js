// Dependencias

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const animalsController = require('./controllers/animalsController');
const loginController = require('./controllers/loginController');

const httpMethodChecker = require('./middlewares/httpMethodChecker');
const logger = require('./middlewares/logger');
const tokenChecker = require('./middlewares/tokenChecker');
const roleChecker = require('./middlewares/roleChecker');

const ROLES = require('./users/roles');

// Middlewares

app.use(httpMethodChecker);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger);

// Arrancamos el server

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});


// Endpoints
app.post('/api/v1/login', loginController.login);

app.use(tokenChecker);

app.get('/api/v1/animals', animalsController.getAll);
app.get('/api/v1/animals/:id', animalsController.getById);
app.post('/api/v1/animals', animalsController.add);
app.put('/api/v1/animals/:id', animalsController.update);

app.delete('/api/v1/animals/:id', roleChecker(ROLES.ADMIN), animalsController.delete);