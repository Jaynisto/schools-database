const db = require("../database/connectionString");

module.exports = {

    showHomePage : async function (req, res, next) {

        try {
            res.render('index');
        }
        catch(err){
          next(err);
        }
    },


    showStudentsRegistrationPage : async function (req, res, next) {

        try {
            const grades = await db.manyOrNone('SELECT * FROM grade;')
            res.render('studentsReg', {
                grades
            })
        } 
        catch(err){
            next(err);
        }
    },

    postStudentData : async function (req,res,next){
        const { firstName, lastName, email, grade} = req.body;
        try{
            await db.oneOrNone('SELECT * FROM add_learner($1, $2, $3, $4);', [firstName, lastName, email, grade])
            res.redirect('register-student')
        }
        catch(err){
            next(err)
        }

    },


    showTeachersRegistrationPage : async function (req, res, next) {
        try {
            const schools = await db.manyOrNone('SELECT * FROM school;')
            res.render('teacherReg', {
                schools
            })
        } 
        catch(err){
            next(err);
        }
    },
    postTeachersData : async function (req,res,next){
        const { firstName, lastName, email, school} = req.body;
        
        try{
            await db.oneOrNone('SELECT * FROM add_teacher ($1, $2, $3, $4);',[firstName, lastName, email, school])
            res.redirect('register-teacher')
        }
        catch(err){
            next(err)
        }
    },

    showHeadOfDepartmentPage : async function (req, res, next){
        try{
            res.render('hod')
        }
        catch(err){
            next(err)
        }
    },

    showSubjectModerationPage : async function (req, res, next){
        try{
            res.render('subject')
        }
        catch(err){
            next(err)
        }
    }

};