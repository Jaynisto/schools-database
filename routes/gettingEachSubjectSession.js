const db = require("../database/connectionString");
const factoryFunction = require("../database/factoryFunction");
let sendOrGetData = factoryFunction(db);

module.exports = {
    showSubjectInfoPage : async function (req, res, next) {
        try {
            
            const { subjectName }  = req.params;
            const subjectId = await sendOrGetData.gettingTheSubjectId(subjectName);
            const theListofLearners = await sendOrGetData.learnersDoingCertainSubject(subjectId);
            const theListOfTeachers = await sendOrGetData.teachersTeachingCertainSubject(subjectId)
            const studentSubjects = await sendOrGetData.getSubjects();
            const listOfTeachers = await sendOrGetData.showingAvailableTeachers()
            res.render('subject',{ 
                subjectName,
                theListofLearners,
                theListOfTeachers,
                studentSubjects,
                listOfTeachers
            });

        } 
        catch (err) {
            next(err);
        }
    }
}; 