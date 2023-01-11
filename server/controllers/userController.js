const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SALT_ROUNDS = 10

// module.exports = function register () {}

module.exports.register = async (req, res) => {

    try {
        
        console.log('Hello from register', req.body)

        const salt = await bcrypt.genSalt(SALT_ROUNDS)

        const hashedPass = await bcrypt.hash(req.body.password, salt)
        console.log("🚀 ~ module.exports.register= ~ hashedPass", hashedPass)

        console.log("🚀 ~ module.exports.register= ~ salt", salt)

        req.body.password = hashedPass // replace the pass from the body with the hashed one
    
        await User.create(req.body)
    
    
        res.send({success: true})

    } catch (error) {
        console.log("🚀 ~ register error", error.message)

        res.send({success: false, error: error.message})
        
    }
}

module.exports.login = async (req, res) => {

    try {
        console.log('Hello from login', req.body)

        const user = await User
        .findOne({
            
            $or: [{email: req.body.emailOrUsername}, 
                {username: req.body.emailOrUsername}
            ]
        
        })
        .select('-__v')
        console.log("🚀 ~ user", user)

        if (!user) return res.send({success: false, errorId: 1})

        const passwordMatch = await bcrypt.compare(req.body.password, user.password)
        console.log("🚀 ~ passwordMatch", passwordMatch)
    
        if (passwordMatch) {

            // remove password from user
            const newUser = user.toObject()
            
            delete newUser.password

            const token = jwt.sign({id: user._id}, process.env.SECRET, {expiresIn: '1h'})

            res.cookie('e04-eshop', token)

            res.send({success: true, user: newUser})

        } else {
            return res.send({success: false, errorId: 1})
        }
        
    } catch (error) {
        console.log("🚀 ~ login error", error.message)

        res.send({success: false, error: error.message})
    }
   
}

module.exports.list = async (req, res) => {

    try {
        console.log('Hello from list', req.user)

        const users = await User.find().select('-password -__v')
        console.log("🚀 ~ module.exports.list= ~ users", users)
    
        // THIS IS THE RESPONSE TO THE CLIENT
        res.send({success: true, users})
    } catch (error) {
        console.log("🚀 ~ list error", error.message)

        res.send({success: false, error: error.message})
    }
   
}

module.exports.delete = async (req, res) => {

    try {
        console.log('Hello from delete', req.params)

        const deletedUser= await User.findByIdAndDelete(req.params._id)
        console.log("🚀 ~ module.exports.delete ~ deletedUser", deletedUser)

        if (!deletedUser) return res.send({success: false, errorId: 1})
       
        res.send({success: true})
    } catch (error) {
        console.log("🚀 ~ delete error", error.message)

        res.send({success: false, error: error.message})
    }
   
}

module.exports.findOne = async (req, res) => {

    try {
        console.log('Hello from findone', req.params)

        const user = await User.findById(req.params._id).select('-__v')
        console.log("🚀 ~ module.exports.findOne= ~ user", user)
       
        res.send({success: true, user})
    } catch (error) {
        console.log("🚀 ~ findone error", error.message)

        res.send({success: false, error: error.message})
    }
   
}

module.exports.edit = async (req, res) => {

    try {
        console.log('Hello from user edit', req.body)

        if (!req.body.username ||
            !req.body.email ||
            !req.body.password
            ) return res.send({success: false, errorId: 3})

        const {_id, ...user} = req.body
        // console.log("🚀 ~ module.exports.edit= ~ _id", _id)
        // console.log("🚀 ~ module.exports.edit= ~ user", user)

        // findByIdAndUpdate({filter}, {new values}, {options/parameters})

        // const updatedUser = await User.findByIdAndUpdate({_id: req.body._id}, {
        //     username: req.body.username,
        //     password: req.body.password,
        //     email: req.body.email
        
        // }, {new: true})

        const updatedUser = await User.findByIdAndUpdate(_id, {...user}, {new: true})
        console.log("🚀 ~ module.exports.edit= ~ updatedUser", updatedUser)

        if (!updatedUser) return res.send({success: false, errorId: 1})
       
        res.send({success: true})
    } catch (error) {
        console.log("🚀 ~ edit user error", error.message)

        res.send({success: false, error: error.message})
    }
   
}

module.exports.addToWishlist = async (req, res) => {

    try {
        console.log('Hello from add to wishlist', req.body)

        const user = await User.findByIdAndUpdate(
            {_id: req.body.user}, // filter
            { // updating
                $push: {
                    wishlist: req.body.product
                }
            }, 
            {new: true} // options
        )
        console.log("🚀 ~ module.exports.addToWishlist= ~ user", user)

        res.send({success: true})
    } catch (error) {
        console.log("🚀 ~ add to wishlist error", error.message)

        res.send({success: false, error: error.message})
    }

}

module.exports.removeFromWishlist = async (req, res) => {

    try {
        console.log('Hello from remove from wishlist', req.body)

       
        const user = await User.findById(req.body.user) // step 1 find the user

        const wishlist = user.wishlist.filter(item => { // step 2 filter the wishlist array
            return item.toString() !== req.body.product
        })
        
        console.log("🚀 ~ module.exports.removeFromWishlist= ~ wishlist", wishlist)

        // step 3 update the user in the db

        const updatedUser = await User.findByIdAndUpdate(
            {_id: req.body.user },
            {wishlist},
            {new: true}
        )
        console.log("🚀 ~ module.exports.removeFromWishlist= ~ updatedUser", updatedUser)

        res.send({success: true, wishlist})
    } catch (error) {
        console.log("🚀 ~ remove from wishlist error", error.message)

        res.send({success: false, error: error.message})
    }

}

module.exports.listWishlist = async (req, res) => {

    try {
        console.log('Hello from list wishlist', req.params)

       const user = await User
       .findById(req.params.user)
        .populate({path: 'wishlist', select: '-__v'})

       console.log("🚀 ~ module.exports.listWishlist= ~ user", user)
       

        res.send({success: true, products: user.wishlist})
    } catch (error) {
        console.log("🚀 ~ list wishlist error", error.message)

        res.send({success: false, error: error.message})
    }

}