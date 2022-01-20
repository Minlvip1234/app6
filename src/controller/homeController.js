let getHomepage = async (req, res) =>
{
   
    res.render('home.hbs')
}

let getLogin = async (req, res) =>
{
    res.render('login.hbs')
}

let goToLogin = async (req,res) =>
{
    res.render('login.hbs')
}

let getHandle = async (req,res) =>
{
      
      return res.render('home.hbs')  
}

module.exports = {
    getHomepage,
    getLogin,
    goToLogin,
    getHandle
}