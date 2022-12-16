const express = require('express');
const router = express.Router()

const productController = require('../controllers/productController.js')

router.post('/add', productController.add)
router.get('/list', productController.list)
router.get('/findone', productController.findone)
router.delete('/delete/:_id', productController.delete)
router.post('/edit', productController.edit)





module.exports = router
