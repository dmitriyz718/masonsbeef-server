const db = require('../models');


// GET api/products - get all products
const index = (req, res) => {
    db.Product.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
}
// create item
const create = (req, res) => {
    db.Product.create(req.body, (err, createdProduct) => {
        if (err) console.log(err);
        res.json(createdProduct)
    })
}
// delete an item
const delItem = (req, res) => {
    db.Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
        if (err) console.log(`error deleting product: `, err);
        res.status(200).json(deletedProduct)
    })
}
// view single item
const showItem = (req, res) => {
    db.Product.findById(req.params.id, (err, singleProduct) => {
        if (err) console.log(`error showing item: `, err);
        res.json(singleProduct)
    })
}
// update product
const updateProduct = (req, res) => {
    db.Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProduct) => {
        if (err) console.log(`error updating product, error: `, err)
        res.json(updatedProduct)
    })
}
module.exports = {
    index,
    create,
    delItem,
    showItem,
    updateProduct
}
