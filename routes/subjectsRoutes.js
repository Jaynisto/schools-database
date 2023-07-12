const express = require('express');
const subjectsRoute = express.Router();
const { gettingTheSubjectPage, postingTheSubject } = require('../controller/subjectController');

subjectsRoute.get('/subject-selection', gettingTheSubjectPage)
subjectsRoute.post('/',postingTheSubject)
subjectsRoute.get('/:subjectId', gettingTheSubjectPage)


module.exports = subjectsRoute 