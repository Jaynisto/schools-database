const db = require("../database/connectionString");
const factoryFunction = require("../database/factoryFunction");
let sendOrGetData = factoryFunction(db);

module.exports = {
    showingAvailableTeachers : async function (req, res, next) {
        try {
            
            const listOfTeachers = await sendOrGetData.showingAvailableTeachers()
            res.render("teacher", {
                listOfTeachers
            })

        } 
        catch (err) {
            next(err);
        }
    }
};  