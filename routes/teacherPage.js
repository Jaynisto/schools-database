module.exports = {
    showTeacherPage : async function (req, res, next) {
      try {

        res.render("teacher");
        
      } 
        catch (err) {

          next(err);
        }
    }
};  