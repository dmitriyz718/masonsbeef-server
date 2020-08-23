const db = require('../models');


// GET api/items - get all items
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
module.exports = {
    index,
    create,
    delItem
}
