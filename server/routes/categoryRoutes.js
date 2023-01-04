const express = require('express')
const router = express.Router()

const categoryController = require('../controllers/categoryController')

router.post('/add', categoryController.add)
router.get('/list', categoryController.list)
router.delete('/deleteparams/:_id', categoryController.deleteParams) //params
router.delete('/deletequery', categoryController.deleteQuery) // query


module.exports = router