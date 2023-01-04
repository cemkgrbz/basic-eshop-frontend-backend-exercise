const Category = require('../models/Category')

module.exports.add = async (req, res) => {

    try {
        
        console.log("req.body is", req.body)

        const category = await Category.create(req.body)

        console.log("category is", category)


        res.send("Hello from category add")
    } catch (error) {
        console.log("Category add error", error)
    }
}

module.exports.list = async (req, res) => {

    try {
    
        console.log("req.body is", req.body)

        const category = await Category.find()

        console.log("category is", category)


        res.send({success: true, category})
    } catch (error) {
        console.log("Category list error", error)
    }
}

module.exports.deleteQuery = async (req, res) => {

    try {
    
        console.log("Delete req.query", req.query)

        const category = await Category.findByIdAndDelete({_id: req.query.id})

        console.log("deleted category", category)


        res.send("hello from delete")
    } catch (error) {
        console.log("delete error", error)
        res.send({success: false, error: error.message})

    }
}

module.exports.deleteParams = async (req, res) => {

    try {
    
        console.log("Delete req.query", req.params)

        const category = await Category.findByIdAndDelete({_id: req.params._id})

        console.log("deleted category", category)


        res.send("hello from delete")
    } catch (error) {
        console.log("delete error", error)
        res.send({success: false, error: error.message})

    }
}

//0.57