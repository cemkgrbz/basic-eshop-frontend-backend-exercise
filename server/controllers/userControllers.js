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
        res.send({success: true});
         
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

//1.27 min