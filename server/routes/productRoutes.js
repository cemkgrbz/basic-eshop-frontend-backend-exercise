const express = require('express');
const router = express.Router()

const productController = require('../controllers/productController.js')

const multer = require('multer')

// const uploadMulterSimple = multer({dest: './server/uploads'})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        
      cb(null, './server/uploads')
    },
    filename: function (req, file, cb) {
        console.log("INSIDE DESTINATION: file:", file)

        let extension = ''

        if (file.mimetype.includes('image')) extension = file.mimetype.slice(6) // gets the characters after index 5

      cb(null, file.fieldname + '-' + Date.now() + '.' + extension)
    }
  })

const uploadMulterAdvanced = multer({ storage: storage })

router.post('/add', uploadMulterAdvanced.single('image'),  productController.add)
router.get('/list', productController.list)
router.get('/findone', productController.findone)
router.delete('/delete/:_id', productController.delete)
router.post('/edit', uploadMulterAdvanced.single('image'),productController.edit)





module.exports = router
