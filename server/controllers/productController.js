const Product = require('../models/Product')

module.exports.add = async (req, res) => {

    try {

        console.log("product add", req.body)

        const newProduct = await Product.create(req.body)
        console.log("New Product:", newProduct)
        

        if(!newProduct) return res.send({success: false, errorId: 2})

        res.send({success: true, product: newProduct})
        
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

module.exports.delete = async (req, res) => {

    try {

        console.log("product delete", req.params)

        const deletedProduct = await Product.findByIdAndDelete(req.params._id)
        console.log(deletedProduct)

        if(!deletedProduct) return res.send({success: false, errorId: 1})

        res.send({success: true})
        
    } catch (error) {

        console.log("product delete error", error.message)

        res.send({success: false, error: error.message})
        
    }
}

module.exports.findone = async (req, res) => {

    try {

        console.log("product findone", req.query)

        const product = await Product.findOne(req.query).select('-__v')

        res.send({success: true, product})
        
    } catch (error) {

        console.log("product findone error", error.message)

        res.send({success: false, error: error.message})
        
    }
}

module.exports.edit = async (req, res) => {

    try {

        console.log("product edit", req.body)

        const {_id, ...product} = req.body
        const updatedProduct = await Product.findByIdAndUpdate({_id}, {...product}, {new: true}) 

        if (!updatedProduct) return res.sen({success: false, errorId:1})

        res.send({success: true, product: updatedProduct})
        
    } catch (error) {

        console.log("product edit error", error.message)

        res.send({success: false, error: error.message})
        
    }
}