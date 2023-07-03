const db = require("../database/connectionString");
const factoryFunction = require("../database/factoryFunction");
let sendOrGetData = factoryFunction(db);

module.exports = {
    showStudentRegistrationPage : async function (req, res, next) {
        try {
            
            const learnersGrade = await sendOrGetData.getGrade()
            res.render("studentsReg", {
                learnersGrade
            });

        } 
        catch (err) {
            next(err);
        }
    }
};  