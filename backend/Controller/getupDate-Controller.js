const Product = require('../Models/Product.js')

const getupDate = (req, res)=>{
    Product.find({_id : req.params.id}).then(result=> res.json(result)).catch(err => res.json(err))
}

module.exports = getupDate;