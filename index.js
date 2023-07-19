const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const session = require("express-session");
const routes = require('./routes/miniApp');

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


app.get('/', routes.showHomePage)
app.get('/student/register-student', routes.showStudentsRegistrationPage)
app.get('/teacher/register-teacher', routes.showTeachersRegistrationPage)
app.get('/head-of-department/moderation', routes.showHeadOfDepartmentPage)
app.get('/subjects/subject-selection', routes.showSubjectModerationPage)
app.post('/student/register-student',routes.postStudentData)
app.post('/teacher/register-teacher',routes.postTeachersData)
app.post('/subjects/subject-selection',routes.subjectSession)
app.get('/subjects/subject-selection/:name',routes.gettingSubjectSession)
app.get('/subjects/remove-teacher', routes.showSubjectModerationPage)
app.post('/subjects/remove-teacher', routes.removingTeacherFromSubjects);
app.get('/adding-teacher-to-subject', routes.showSubjectModerationPage)
app.post('/adding-teacher-to-subject', routes.addingTeacherToSubject)
app.get('/teachers/teacher-selection', routes.showTeacherModerationPage)
app.post('/teachers/teacher-selection', routes.teacherSession)
app.get('/teachers/teacher-selection/:first_name',routes.gettingTeacherSession)
app.post('/teacher/remove-subject', routes.removingSubjectFromTeacher)



const PORT = process.env.PORT || 5050;
app.listen(PORT, (req, res) => {
    console.log("Application Fired On " + PORT + "!")
});