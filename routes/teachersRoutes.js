const express = require('express');
const teachersRoute = express.Router()
const { getAllTeachers, getTeacher, createTeacher, deleteTeacher, updateTeacher, createTeacherPage  } = require('../controller/teachersController');

teachersRoute.get('/', getAllTeachers);
teachersRoute.post('/create-teacher', createTeacher)
teachersRoute.delete('/:userName', deleteTeacher)
teachersRoute.get('/create-teacher', createTeacherPage)
teachersRoute.get('/:userName', getTeacher)
teachersRoute.put('/:userName', updateTeacher)

module.exports = teachersRoute