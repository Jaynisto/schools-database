const db = require("../database/connectionString");
const factoryFunction = require("../database/factoryFunction");
let sendOrGetData = factoryFunction(db);

module.exports = {
    clearingTeachersSubject : async function (req, res, next) {
      try {

        const { subjectId, teachersName } = req.body;
        await sendOrGetData.clearingSubject(subjectId)
        res.redirect(`/teacher/${teachersName}`)
        
      } 
      catch (err) {

          next(err);
    }
    }
};  