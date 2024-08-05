const User = require('../Models/Users.js')

const LoginKaro = (req, res)=>{
    const {email, password} = req.body;
    User.findOne({email : email}).then(user =>{
        if (user) {
            if (user.password === password) {
                res.json({status : 200, user})
            }else{
                res.json({status : 404, user})
            }
        }
    })
}

module.exports = LoginKaro;