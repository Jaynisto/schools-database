const db = require("../database/connectionString");
const factoryFunction = require("../database/factoryFunction");
let sendOrGetData = factoryFunction(db);

module.exports = {
    clearingStudent : async function (req, res, next) {
      try {

        const { studentId } = req.body;
        const { subjectName } = req.params;
        console.log(studentId, "here!")
        await sendOrGetData.clearingStudent(studentId)
        res.redirect(`subject/${subjectName}`)
        
      } 
        catch (err) {

          next(err);
        }
    }
};  