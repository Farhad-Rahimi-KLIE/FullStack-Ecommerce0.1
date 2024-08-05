const Product = require('../Models/Product.js')

const AddProduct = (req, res)=>{
    let file = req.file.filename;
    let name = req.body.name;
    let price = req.body.price;
    Product.create({
        file : file,
        name : name,
        price : price
    }).then(result => res.json(result)).catch(err => res.json(err))
}

module.exports = AddProduct;