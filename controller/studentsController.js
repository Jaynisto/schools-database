const db = require("../database/connectionString");

async function getAllStudents(req, res){
    try{
        const students = await db.many('SELECT * FROM learner;')
        res.status(200).json(students)
    res.render('index', { students });

    }
    catch(err){
        throw new Error(err)
    }
}

async function createStudent(req, res){
    const { firstName, lastName, email, options} = req.body;
    console.log(req.body)
    try{

       await db.many('SELECT * FROM add_learner($1, $2, $3, $4);', [firstName, lastName, email, options]);
        
       res.render('studentsReg');

    }
    catch(err){
        throw new Error(err)
    }
}

async function createStudentPage(req, res){
    try{
        res.render('studentsReg')
    }
    catch(err){
        throw new Error(err)
    }
}

async function deleteStudent(req, res){
    const { userId } = req.params;
    try{
        res.send("iamDeleteStudent id;;;;",userId)

    }
    catch(err){
        throw new Error(err)
    }
}

async function getStudent(req, res){
    const { userId } = req.params;
    try{

        const learner = await db.any('SELECT * FROM learner WHERE id = $1;', userId);
        res.status(200).json(learner)

    }
    catch(err){
        throw new Error(err)
    }
}


async function updateStudent(req, res){
    const { userId } = req.params
    const { firstName, lastname, email, options} = req.body;
    try{
       const student = await db.many('UPDATE learner SET fist_name = $2 ,last_name = $3 ,email = $4, options = $5  WHERE id = $1;', [ firstName, lastname, email, options, userId]);
        
       res.status(200).json(student)

    }
    catch(err){
        throw new Error(err)
    }
}

module.exports = { getAllStudents, createStudent, deleteStudent, getStudent, updateStudent, createStudentPage }
 