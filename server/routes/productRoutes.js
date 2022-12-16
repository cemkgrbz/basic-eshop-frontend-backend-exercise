const express = require('express');
const router = express.Router()

const productController = require('../controllers/productController.js')

router.post('/add', productController.add)
router.get('/list', productController.list)



module.exports = router
