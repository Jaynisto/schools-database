module.exports = {
    showModerationPage : async function (req, res, next) {
        try {
            
            res.render("subMod")

        } 
        catch (err) {
            next(err);
        }
    }
}; 