module.exports = {
  showHomePage : async function (req, res, next) {
    try {
      res.render('index');
    } catch (err) {
      next(err);
    }
  }
};  