const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const session = require("express-session");
const homeRoute = require('./routes/homePage');
const addingTeacherRoute = require('./routes/addingNewTeacherPage');
const addingStudentRoute = require('./routes/addingNewStudentPage')
const studentRegistrationScreenRoute = require('./routes/studentRegistrationPage');
const teacherRegistrationScreenRoute = require('./routes/teacherRegistrationPage');
const accessingTeacherScreenRoute = require('./routes/teacherPage');
const accessingStudentScreenRoute = require('./routes/accessingTheStudentScreen');
const accessingSubjectScreenRoute = require('./routes/accessingSubjectsPage');
const subjectSessionRoute = require('./routes/subjectSelection');
const gettingSubjectSessionRoute = require('./routes/gettingEachSubjectSession');
const moderationPageRoute = require('./routes/moderationPage');
const listOfStudentsRoute = require('./routes/learnersDoingCertainModules');
const clearingStudentRoute = require('./routes/clearingTeachers');
const linkingTeacherToSubjectRoute = require('./routes/addTeacher');

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


app.get('/', homeRoute.showHomePage);
app.get('/hod', listOfStudentsRoute.showAvailabeleOptions);
app.get('/subMod', moderationPageRoute.showModerationPage);
app.post('/subject', subjectSessionRoute.makeSubjectSession);
app.get('/subject',accessingSubjectScreenRoute.showSubjectPage);
app.get('/teacher',accessingTeacherScreenRoute.showTeacherPage);
app.get('/students', accessingStudentScreenRoute.showStudentPage);
app.post('/teacherRegistration', addingTeacherRoute.postNewTeacherPage);
app.post('/studentRegistration', addingStudentRoute.postNewStudentPage);
app.get('/subject/:subjectName', gettingSubjectSessionRoute.showSubjectInfoPage)
app.get('/teacherReg', teacherRegistrationScreenRoute.showTeacherRegistrationPage);
app.get('/studentsReg', studentRegistrationScreenRoute.showStudentRegistrationPage);
app.post('/clearingTeacher', clearingStudentRoute.clearingTeacher)
app.post('/addTeacher', linkingTeacherToSubjectRoute.selectTeacher)


const PORT = process.env.PORT || 5050;
app.listen(PORT, (req, res) => {
    console.log("Application Fired On " + PORT + "!")
});