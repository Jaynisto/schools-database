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
            const subjects = await db.manyOrNone('SELECT * FROM subject;')
            
            res.render('subject', {
                subjects
             
            })
        }
        catch(err){
            next(err)
        }
    },

    subjectSession : async function (req, res, next){
        const { subjectId } = req.body;
        try{
            const { name } = await db.oneOrNone('SELECT * FROM subject WHERE id = $1;',[subjectId])
            req.session.name = name;
            res.redirect(`/subjects/subject-selection/${name}`)
        }
        catch(err){
            next(err)
        }
    },
    gettingSubjectSession : async function (req,res,next){
        const subjectName = req.params.name;
        try{
            const subjects = await db.manyOrNone('SELECT * FROM subject;')
            const { id } = await db.oneOrNone('SELECT * FROM subject WHERE name = $1;',[subjectName])
            const teachers = await db.any('SELECT * FROM find_teacher_for_certain_subject($1);',[id])
            const listOfTeachers = await db.many('SELECT * FROM teacher;')
            res.render('subject', {
                subjects,
                teachers,
                subjectName,
                listOfTeachers
            })
        }
        catch(err){
            next(err)
        }
    },

    removingTeacherFromSubjects: async function (req, res, next) {
        const subjectName  = req.session.name;
        const { teachersId } = req.body;
        try {
          await db.none('DELETE from teacher_subject where teacher_id = $1', [teachersId])
          res.redirect(`/subjects/subject-selection/${subjectName}`);
        } catch (err) {
          next(err);
        }
    },
    addingTeacherToSubject : async function (req, res, next) {
        const {subjectName}  = req.body;
        const { teacherId } = req.body;
        try {
            const { id } = await db.oneOrNone('SELECT * FROM subject WHERE name = $1;',[subjectName])
            console.log(teacherId, "and" , id)
          
            await db.oneOrNone('select * from link_teacher_to_subject($1, $2);',[teacherId,id])
            res.redirect(`/subjects/subject-selection/${subjectName}`)
          
        } 
        catch (err) {
  
            next(err);
      }
      }
      


};