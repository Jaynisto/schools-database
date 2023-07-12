const db = require("../database/connectionString");

async function gettingTheSubjectPage(req, res) {
    try {
        const subjectId = req.params.subjectId;
        const subjects = await db.many('SELECT * FROM subject;');
        const teacher = await db.manyOrNone('select * from find_teacher_for_certain_subject($1);',[subjectId])
        console.log(subjectId,"........")
        res.render('subject', { 
            subjects,
            teacher  });
    } catch (err) {
      throw new Error(err);
    }
  }

async function postingTheSubject(req,res){
    const { subjectId } = req.body;
    try{
        req.session.subjectId = subjectId;
        res.redirect(`subjects/${subjectId}`)
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

module.exports = { gettingTheSubjectPage, getAllSubjects, postingTheSubject }
