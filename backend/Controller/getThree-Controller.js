const Product = require('../Models/Product.js')

const getThree = (req, res)=>{
    Product.find(req.body).limit(4).then(result => res.json(result)).catch(err => res.json(err))
}

module.exports = getThree;