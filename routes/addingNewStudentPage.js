const db = require("../database/connectionString");
const factoryFunction = require("../database/factoryFunction");
let sendOrGetData = factoryFunction(db);


module.exports = {
    postNewStudentPage : async function (req, res, next){

        try {
            const { firstName, lastName, email, options } = req.body;
            console.log(req,body)
            await sendOrGetData.addingStudents(firstName, lastName, email, options);
            res.redirect("studentsReg") 
        } catch (err) {
        next(err);
        }

    }
};