const User = require('../Models/Users.js')

const Register = (req, res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    User.create({
        name : name,
        email : email,
        password : password
    }).then(result => res.json(result)).catch(err => res.json(err))
}

module.exports = Register;