const db = require("../database/connectionString");
const factoryFunction = require("../database/factoryFunction");
let sendOrGetData = factoryFunction(db);


module.exports = {
    addingSubjectToTeacher : async function (req, res, next) {
      try {
        const { teachersName, subjectId} = req.body;
        console.log(subjectId, "and" , teachersName)
        const teachersId = await sendOrGetData.gettingTeachersId(teachersName);
        await sendOrGetData.linkTeacherToSubject(teachersId, subjectId)
        res.redirect(`/teacher/${teachersName}`)
        
      } 
      catch (err) {

          next(err);
    }
    }
};  