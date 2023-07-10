const express = require('express')
const headOfDepartmentRoute = express.Router()

const { moderate } = require('../controller/headOfDepartmentController')

headOfDepartmentRoute.get('/', moderate)
headOfDepartmentRoute.get('/moderation', moderate)

module.exports = headOfDepartmentRoute
