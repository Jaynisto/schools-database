module.exports = {
    showStudentPage : async function (req, res, next) {
        try {
            
            res.render("student");
        } 
        catch (err) {
            next(err);
        }
    }
}; 