const db = require("../database/connectionString");
const factoryFunction = require("../database/factoryFunction");
let sendOrGetData = factoryFunction(db);

module.exports = {
    showTeacherRegistrationPage : async function (req, res, next) {
        try {
            
            const schools = await sendOrGetData.getSchool()
            res.render("teacherReg", {
                schools
            });

        } 
        catch (err) {
            next(err);
        }
    }
}; 