const express = require('express');
const bodyParser = require("body-parser");
const passport = require("passport")
const app = express();
const session = require('express-session');

app.set('view engine', 'ejs');

// middlewares for express routes
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((request, response, next) => {
    response.locals.user = request.session.user;
    response.locals.isauth = request.isAuthenticated();
    next();
});


app.get('*', (request, response) => {
    response.status(404).render("./error")
});

// functions for persistant sessions
passport.serializeUser((userId, done) => {
    done(null, userId);
});
passport.deserializeUser((userId, done) => {
    done(null, userId);
});

app.listen(process.env.PORT || 5000, () => {
    console.log("listening on port 5000!");
});