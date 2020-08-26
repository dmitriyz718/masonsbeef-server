// imports
const router = require('express').Router();
const ctrl = require('../controllers');
const authenticate = require('../middleware/authenticate')
// create routes
router.get('/', ctrl.products.index);
router.post('/send', ctrl.products.sendEmail)
router.post('/', authenticate, ctrl.products.create); // admin route
router.delete('/delete/:id', authenticate, ctrl.products.delItem) // admin route
router.get('/view/:id', ctrl.products.showItem)
router.put('/update/:id', authenticate, ctrl.products.updateProduct) // admin route
module.exports = router;
