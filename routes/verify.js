// imports
const router = require('express').Router();
const ctrl = require('../controllers');
const authenticate = require('../middleware/authenticate')
// create routes
router.post('/', ctrl.verify.index) // log in
/* router.post('/', ctrl.products.create);
router.delete('/delete/:id', ctrl.products.delItem)
router.get('/view/:id', ctrl.products.showItem)
router.put('/update/:id', ctrl.products.updateProduct) */
module.exports = router;
