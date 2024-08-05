const Product = require('../Models/Product.js')

const BYName = (req, res)=>{
    Product.find(req.body).sort({price : -1}).then(result => res.json(result)).catch(err => res.json(err))
}

module.exports = BYName;