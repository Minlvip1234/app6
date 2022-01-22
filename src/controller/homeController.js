import pool from '../config/connectDB'


let getHomepage = async (req, res) => {
    pool.query('select * from admin', function (err, result, fields) {
        const test = result.map(test => { return test })
        return res.render('home.hbs', { res: test })
    })
}

let getLogin = async (req, res) => {
    res.render('login.hbs')
}

let goToLogin = async (req, res) => {
    res.render('login.hbs')
}

let getHandle = async (req, res) => {
    let ID = req.body.id;
    let ten = req.body.ten;
    
    pool.query('insert into admin (ID,Ten) values (?,?)', [ID, ten])
    pool.query('select * from admin', function (err, result, fields) {
        const test = result.map(test => { return test })
        return res.redirect('/')
    })
}

let getDelete = async (req, res) =>
{
    let ID = req.body.id;
    pool.query('DELETE FROM admin WHERE ID = ?', [ID])
    pool.query('select * from admin', function (err, result, fields) {
        const test = result.map(test => { return test })
        return res.redirect('/')
    })
}

let getEdit = async(req,res) =>
{
    let ID = req.params.id;
    pool.query('select * from admin where ID = ?', [ID], function(err,result,fields){
        const test = result.map(test => { return test })
        res.render('edit.hbs', {res: test})
    })
   
}

let getDoEdit = async(req,res) =>
{
    let ID = req.body.id;
    let Ten = req.body.ten;
    console.log(ID)
    console.log(Ten)
    pool.query('update admin set Ten = ? where ID = ?', [Ten, ID] )
    
    pool.query('select * from admin', function (err, result, fields) {
        const test = result.map(test => { return test })
        return res.redirect('/')
    })
}

module.exports = {
    getHomepage,
    getLogin,
    goToLogin,
    getHandle,
    getDelete,
    getEdit,
    getDoEdit
}