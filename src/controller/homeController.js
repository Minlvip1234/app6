let getHomepage = async (req, res) =>
{
    res.render('home.hbs')
}


module.exports = {
    getHomepage
}