const User = require('../models/User.js')

module.exports.register = async (req,res) => {

    try {

        await User.create(req.body);
        res.send({success: true});
         
    } catch (error) {

        console.log("Register error", error.message);
        res.send({success: false, error: error.message});
        
    }
}

module.exports.login = async (req,res) => {

    try {

        const user = await User
        .findOne(req.body)
        .select('-password -__v')
    
        // const user = await User.find({
        //     email: req.body.email,
        //     password: req.body.password
        // })
        
        console.log("user", user)

        if (!user) return res.send({success: false, errorId: 1})
        res.send({success: true, user});
         
    } catch (error) {

        console.log("Login error", error.message);
        res.send({success: false, error: error.message});
        
    }
}

module.exports.list = async (req,res) => {

    try {

        console.log('List')

        const users = await User.find().select('-password -__v' )
        console.log(users)

        res.send({success: true, users});
         
    } catch (error) {

        console.log("List error", error.message);
        res.send({success: false, error: error.message});
        
    }
}

module.exports.delete = async (req,res) => {

    try {

        console.log('Delete', req.params)

        const deletedUser = await User.findByIdAndDelete(req.params._id);

        if (!deletedUser) return res.send({success: false, errorId: 1})

        res.send({success: true, deletedUser});
         
    } catch (error) {

        console.log("Delete error", error.message);
        res.send({success: false, error: error.message});
        
    }
}

module.exports.findOne = async (req,res) => {

    try {

        console.log('Find one', req.params)

        const user = await User.findById(req.params._id).select('__v')
        console.log('User', user)


        res.send({success: true, user});
         
    } catch (error) {

        console.log("Find one error", error.message);
        res.send({success: false, error: error.message});
        
    }
}

module.exports.edit = async (req,res) => {

    try {

        console.log('Edit', req.body)

        if (!req.body.username ||
            !req.body.email ||
            !req.body.password
            ) return res.send({success: false, errorId: 3})

        const {_id, ...user} = req.body

        const updatedUser = await User.findByIdAndUpdate({_id}, {...user}, {new: true})
        console.log('updatedUser', updatedUser)

        if (!updatedUser) return res.send({success: false, errorId: 1})


        res.send({success: true});
         
    } catch (error) {

        console.log("Edit error", error.message);
        res.send({success: false, error: error.message});
        
    }
}

module.exports.addToCart = async (req,res) => {

    try {

        console.log('Add to cart', req.body)

        const user = await User.findByIdAndUpdate(
            {_id: req.body._id},
            {
                $push: {
                    cart: req.body.product
                }
            },
            {new: true}
        )

            console.log("cart user", user)

        res.send({success: true});
         
    } catch (error) {

        console.log("Add to cart error", error.message);
        res.send({success: false, error: error.message});
        
    }
}

module.exports.removeFromCart = async (req,res) => {

    try {

        console.log('Remove from cart', req.body)

        const user = await User.findById(req.body._id)

        console.log("🚀 ~ file: userControllers.js:167 ~ module.exports.removeFromCart= ~ user", user)

        const cart = user.cart.filter(item => item._id !== req.body.productId)
        console.log("🚀 ~ file: userControllers.js:171 ~ module.exports.removeFromCart= ~ cart", cart)


        const updatedUser = await User.findByIdAndUpdate(
            {_id: req.body._id},
            {cart},
            {new: true}
        )
        console.log("🚀 ~ file: userControllers.js:179 ~ module.exports.removeFromCart= ~ updatedUser", updatedUser)


        res.send({success: true, cart});
         
    } catch (error) {

        console.log("Remove from cart error", error.message);
        res.send({success: false, error: error.message});
        
    }
}

module.exports.addToWishlist = async (req,res) => {

    try {

        console.log('Add to wishlist', req.body)

        const user = await User.findByIdAndUpdate(
            {_id: req.body.user},
            {
                $push: {
                    wishlist: req.body.product
                }
            },
            {new: true}
        )
            console.log("🚀 ~ file: userController.js:207 ~ module.exports.addToWishlist= ~ user", user)
            

        res.send({success: true});
         
    } catch (error) {

        console.log("Add to wishlist error", error.message);
        res.send({success: false, error: error.message});
        
    }
}

module.exports.removeFromWishlist = async (req, res) => {

    try {
        console.log('Hello from remove from wishlist', req.body)

       
        const user = await User.findById(req.body.user) // step 1 find the user

        const wishlist = user.wishlist.filter(item => { // step 2 filter the wishlist array
            return item.toString() !== req.body.product
             
            // return item != req.body.product //or this

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