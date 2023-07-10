async function moderate(req, res){
    try{
        res.render('hod')

    }
    catch(err){
        throw new Error(err)
    }
}

module.exports = { moderate }