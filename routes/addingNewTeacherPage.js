const db = require("../database/connectionString");
const factoryFunction = require("../database/factoryFunction");
let sendOrGetData = factoryFunction(db);

module.exports = {
    postNewTeacherPage : async function (req, res, next){
      try {
            const { firstName, lastName, email, schoolId } = req.body;
            await sendOrGetData.addingTeacher(firstName, lastName, email, schoolId);
            res.redirect("teacherReg");
        } catch (err) {
        next(err);
        }
    }
};


  