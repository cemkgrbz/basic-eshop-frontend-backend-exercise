const Product = require('../models/Product')

module.exports.add = async (req, res) => {

    try {

        console.log("product add", req.body)

        const newProduct = await Product.create(req.body)
        console.log("New Product:", newProduct)
        

        if(!newProduct) return res.send({success: false, errorId: 2})

        res.send({success: true})
        
    } catch (error) {

        console.log("product add error", error.message)

        res.send({success: false, error: error.message})
        
    }
}

module.exports.list = async (req, res) => {

    try {

        console.log("product list")

        const products = await Product.find()
        console.log(products)

        res.send({success: true, products})
        
    } catch (error) {

        console.log("product list error", error.message)

        res.send({success: false, error: error.message})
        
    }
}