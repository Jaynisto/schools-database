const db = require("../database/connectionString");
const factoryFunction = require("../database/factoryFunction");
let sendOrGetData = factoryFunction(db);

module.exports = {
    showTeacherInfoPage : async function (req, res, next) {
        try {
            
            const { teachersName }  = req.params;
            const teacherId = await sendOrGetData.teachersId(teachersName);
            const listOfSubject = await sendOrGetData.subjectsDoneByCertainTeachers(teacherId);
            const listOfTeachers = await sendOrGetData.showingAvailableTeachers()
            const availableSubject = await sendOrGetData.getSubjects();
            res.render('teacher',{ 
                listOfSubject,
                listOfTeachers,
                teachersName,
                availableSubject
            });

        } 
        catch (err) {
            next(err);
        }
    }
}; 