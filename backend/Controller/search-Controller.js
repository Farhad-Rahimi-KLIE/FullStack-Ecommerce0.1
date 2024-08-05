const Product = require('../Models/Product.js')

const SearchApi = (req, res)=>{
        Product.find({
            "$or" : [
                {name : {$regex : req.params.key}}
            ]
        }).then(result => res.json(result)).catch(err => res.json(err))
}

module.exports = SearchApi;