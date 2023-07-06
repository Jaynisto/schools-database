const express = require('express');
const studentRouter = express.Router()
const { getAllStudents, createStudentPage , createStudent, deleteStudent, getStudent, updateStudent } = require('../controller/studentsController')

studentRouter.get('/', getAllStudents)
studentRouter.post('/', createStudent)
studentRouter.delete('/:userId', deleteStudent)
studentRouter.get('/studentsReg', createStudentPage)
studentRouter.get('/:userId', getStudent)
studentRouter.put('/:userId', updateStudent)

module.exports = studentRouter