const express = require('express');
const studentRoute = express.Router()
const { getAllStudents, createStudentPage , createStudent, deleteStudent, getStudent, updateStudent } = require('../controller/studentsController')

studentRoute.get('/', getAllStudents)
studentRoute.post('/create-student', createStudent)
studentRoute.delete('/:userId', deleteStudent)
studentRoute.get('/create-student', createStudentPage)
studentRoute.get('/:userId', getStudent)
studentRoute.put('/:userId', updateStudent)

module.exports = studentRoute