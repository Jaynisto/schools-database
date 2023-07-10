const db = require("../database/connectionString");

async function getAllSubjets(req, res){
    try{
        
    }
    catch(err){
        throw new Error(err)
    }
}

async function getSubject(req, res){
    try{

    }
    catch(err){
        throw new Error(err)
    }
}

async function theSubjectPage(req, res){
    try{
        const subjects = await db.manyOrNone('SELECT * FROM subject;');
        res.render('subject', {
            subjects
        });
    }
    catch(err){
        throw new Error(err)
    }
}

async function postSubject(req, res){
    const { subjectId } = req.body;
    try{
        const subjectName = await db.oneOrNone('SELECT * FROM subject WHERE id = $1;',[subjectId])
        const { name } = subjectName
        if(name){
        req.session.name = name;
        res.redirect(`subjects/${name}`)
        return;
        }

    }
    catch(err){
        throw new Error(err)
    }

}

async function getSubjectsParam(req,res){
    const { subjectName } = req.params;
    try{
        res.redirect(`subjects/${subjectName}`)
    }
    catch(err){
        throw new Error(err)
    }
}


module.exports = { getAllSubjets, getSubject, theSubjectPage, postSubject, getSubjectsParam}
