const db = require("../database/connectionString");

async function getAllTeachers(req, res){
    try{
        

    }
    catch(err){
        throw new Error(err)
    }
}

async function getTeacher (req, res){
    try{

    }
    catch(err){
        throw new Error(err)
    }

}

async function  createTeacher(req, res){
    const { firstName, lastName, email, options } = req.body;
    console.log(req.body)
    try{
        res.redirect('/teachers/create-teacher')
    }
    catch(err){
        throw new Error(err)
    }
}

async function  createTeacherPage(req, res){
    try{
        const schools = await db.many('SELECT * FROM school;');
        res.render('teacherReg', {
            schools
        })
    }
    catch(err){
        throw new Error(err)
    }
}

async function deleteTeacher(req,res){
    

    try{
        
    }

    catch(err){
        throw new Error(err)
    }
}

async function updateTeacher(req,res){
    try{

    }
    catch(err){
        throw new Error(err)
    }
}

module.exports = { getAllTeachers, getTeacher, createTeacher, deleteTeacher, updateTeacher, createTeacherPage  }