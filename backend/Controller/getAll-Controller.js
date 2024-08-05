const Product = require('../Models/Product.js')

const getAll = (req, res)=>{
    Product.find(req.body).then(result => res.json(result)).catch(err => res.json(err))
}

module.exports = getAll;