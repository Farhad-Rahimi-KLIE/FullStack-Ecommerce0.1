const Single = require('../Models/single.js')

const SingleData = (req, res)=>{
    Single.create(req.body).then(result => res.json(result)).catch(err => res.json(err))
}

module.exports = SingleData;