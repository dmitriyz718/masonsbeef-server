// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// create routes
router.get('/', ctrl.products.index);
router.post('/', ctrl.products.create);
router.delete('/delete/:id', ctrl.products.delItem)
module.exports = router;
