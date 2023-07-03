const db = require("../database/connectionString");
const factoryFunction = require("../database/factoryFunction");
let sendOrGetData = factoryFunction(db);

module.exports = {
    makeSubjectSession : async function (req, res, next) {
        try {
            
            const { subjectId } = req.body;
            const subjectName = await sendOrGetData.checkSub(subjectId)
            if(subjectName){
            req.session.subjectName = subjectName;
                res.redirect(`subject/${subjectName}`)
            return;
            }

        } 
        catch (err) {
            next(err);
        }
    }
}; 