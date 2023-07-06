const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require('path');
const studentRoute = require('./routes/studentRoutes')

let app = express()

//Configuring Handlebars
const handlebarSetup = exphbs.engine({
    partialsDir: "./views/partials",
    viewPath: './views',
    layoutsDir: './views/layouts'
});

app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');
app.use(express.static("public"));

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Session
app.use(session({
    secret: 'codeforgeek',
    resave: true,
    saveUninitialized: true
}));

// Set the views directory



app.get('/', studentRoute);
app.use('/students', studentRoute);



const PORT = process.env.PORT || 5050;
app.listen(PORT, (req, res) => {
    console.log("Application Fired On " + PORT + "!")
});