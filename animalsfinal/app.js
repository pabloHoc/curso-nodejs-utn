// Dependencias
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.set('view engine', 'ejs');

// Routes
const userRouter = require('./components/users/routes');
const animalsRouter = require('./components/animals/routes');

const httpMethodChecker = require('./middlewares/httpMethodChecker');
const logger = require('./middlewares/logger');
const tokenChecker = require('./middlewares/tokenChecker');

// Middlewares

app.use(httpMethodChecker);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger);

// Arrancamos el server

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

app.get('/', (request, response) => {
    response.render('index');
});

app.get('/name/:name', (request, response) => {
    response.render('name', {
        name: request.params.name
    });
});

app.get('/home', (request, response) => {
    response.redirect('/');
})

// Endpoints
app.use('/api/v1', userRouter);

app.use(tokenChecker);

app.use('/api/v1/animals', animalsRouter);