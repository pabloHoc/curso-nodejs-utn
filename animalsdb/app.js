// Dependencias

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const router = require('./utils/router');

// Routes
const userRoutes = require('./components/users/routes');
const animalsRoutes = require('./components/animals/routes');

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


// Endpoints
router.setRoutes(app, userRoutes);

app.use(tokenChecker);

router.setRoutes(app, animalsRoutes);