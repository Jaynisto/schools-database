const express = require('express');
const subjectsRoute = express.Router();
const { getAllSubjets, getSubject, getSubjectsParam, postSubject,theSubjectPage } = require('../controller/subjectController')

subjectsRoute.get('/selection', theSubjectPage)
subjectsRoute.post('/', postSubject)
subjectsRoute.get('/', getSubjectsParam)

module.exports = subjectsRoute 