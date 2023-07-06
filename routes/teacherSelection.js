const db = require("../database/connectionString");
const factoryFunction = require("../database/factoryFunction");
let sendOrGetData = factoryFunction(db);

module.exports = {
    makeTeacherSession : async function (req, res, next) {
        try {
            
            const { teacherId } = req.body;
            const teachersName = await sendOrGetData.teachersName (teacherId)
            if(teachersName){
            req.session.teachersName = teachersName;
                res.redirect(`teacher/${teachersName}`)
            return;
            }

        } 
        catch (err) {
            next(err);
        }
    }
}; 