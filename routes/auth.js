// imports
const router = require('express').Router();
const ctrl = require('../controllers');
const authenticate = require('../middleware/authenticate')
// create routes
router.post('/', ctrl.auth.index); // create user
router.post('/user', authenticate, ctrl.verify.index); // find user token by log in info
/* router.post('/', ctrl.products.create);
router.delete('/delete/:id', ctrl.products.delItem)
router.get('/view/:id', ctrl.products.showItem)
router.put('/update/:id', ctrl.products.updateProduct) */
module.exports = router;
