const db = require("../database/connectionString");
const factoryFunction = require("../database/factoryFunction");
let sendOrGetData = factoryFunction(db);

module.exports = {
    showSubjectPage : async function (req, res, next) {
        try {
            
            const studentSubjects = await sendOrGetData.getSubjects();
            res.render("subject", {
                studentSubjects
            })

        } 
        catch (err) {
            next(err);
        }
    }
}; 