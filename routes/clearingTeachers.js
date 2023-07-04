const db = require("../database/connectionString");
const factoryFunction = require("../database/factoryFunction");
let sendOrGetData = factoryFunction(db);

module.exports = {
    clearingTeacher : async function (req, res, next) {
      try {

        const { teacherId, subjectName } = req.body;
        await sendOrGetData.clearingTeacher(teacherId)
        res.redirect(`/subject/${subjectName}`)
        
      } 
      catch (err) {

          next(err);
    }
    }
};  