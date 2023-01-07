 const mongoose = require("mongoose");

 const {Schema} = mongoose;

 const userSchema = new Schema({

    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    cart: [],
    wishlist: [{type: Schema.Types.ObjectId, ref: 'Product'}]

 });

 module.exports = mongoose.model('User', userSchema);