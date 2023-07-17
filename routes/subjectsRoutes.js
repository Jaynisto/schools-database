const express = require('express');
const subjectsRoute = express.Router();
const { gettingTheSubjectPage, removeTeacherFromSubject, postingTheSubject } = require('../controller/subjectController');

subjectsRoute.get('/subject-selection', gettingTheSubjectPage)
subjectsRoute.post('/',postingTheSubject)
subjectsRoute.get('/:subjectId', gettingTheSubjectPage)
subjectsRoute.post('/remove-teacher', removeTeacherFromSubject)
subjectsRoute.get('/remove-teacher', removeTeacherFromSubject)

module.exports = subjectsRoute 