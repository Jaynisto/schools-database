const db = require("../database/connectionString");
const factoryFunction = require("../database/factoryFunction");
let sendOrGetData = factoryFunction(db);

module.exports = {
    showAvailabeleOptions : async function (req, res, next) {
        try {
        
            res.render("hod");
        } 
        catch (err) {
            next(err);
        }
    }
}; 