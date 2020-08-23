const db = require('../models');


// GET api/items - get all items
const index = (req, res) => {
    db.Product.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
}
// create item
const create = (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
    });
    newProduct.save().then(item => res.json(item));
}
// delete an item
/* const delItem = (req, res) => {
    db.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
        if (err) console.log(`error deleting product: `, err);
        res.status(200).json(deletedProduct)
    })
} */
module.exports = {
    index,
    create
}
