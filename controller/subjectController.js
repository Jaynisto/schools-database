const db = require("../database/connectionString");

async function gettingTheSubjectPage(req, res) {
    try {
        const { subjectId } = req.params;
        const subjects = await db.many('SELECT * FROM subject;');
        const { id } = await db.oneOrNone('SELECT * FROM subject WHERE name = $1;', [subjectId])
        const { name } = await db.oneOrNone('SELECT * FROM subject WHERE id = $1;', [id])
        const  subjectName = name;
        const teacher = await db.manyOrNone('select * from find_teacher_for_certain_subject($1);',[id])
        res.render('subject', { 
            subjects,
            teacher,
            subjectName
          });
    } catch (err) {
      throw new Error(err);
    }
  }

async function postingTheSubject(req,res){
    const { subjectId } = req.body;
    try{
        const { name } = await db.oneOrNone('SELECT * FROM subject WHERE id = $1;', [subjectId])
        console.log(name, "Not null!")
        req.session.name = name;
        res.redirect(`subjects/${name}`)
    }
    catch(err){
        throw new Error(err)
    }
}

async function getAllSubjects(req,res){
    try{
        
    }
    catch(err){
        throw new Error(err)
    }

}

async function removeTeacherFromSubject(req, res){
    const { teachersName } = req.body; 

    try{
        await db.none("DELETE from teacher_subject where teacher_id = $1", [teachersName])
        res.redirect(`subjects/`)
    }
    catch(err){
        throw new Error(err)
    }
}

module.exports = { gettingTheSubjectPage, getAllSubjects, postingTheSubject, removeTeacherFromSubject }
