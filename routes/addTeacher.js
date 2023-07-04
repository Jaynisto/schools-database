const db = require("../database/connectionString");
const factoryFunction = require("../database/factoryFunction");
let sendOrGetData = factoryFunction(db);


module.exports = {
    selectTeacher : async function (req, res, next) {
      try {
        const { subjectName, teacherId } = req.body;
        console.log(teacherId, "and" , subjectName)
        const subjectId = await sendOrGetData.gettingTheSubjectId(subjectName);
        await sendOrGetData.linkTeacherToSubject(teacherId, subjectId)
        res.redirect(`/subject/${subjectName}`)
        
      } 
      catch (err) {

          next(err);
    }
    }
};  