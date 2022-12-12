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
        
        console.log("🚀 ~ user", user)

        if (!user) return res.send({success: false, errorId: 1})
        res.send({success: true});
         
    } catch (error) {

        console.log("Register error", error.message);
        res.send({success: false, error: error.message});
        
    }
}