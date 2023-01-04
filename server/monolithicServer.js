const express = require('express');
const app = express();
const mongoose = require('mongoose')
const {Schema} = mongoose
const dbConnect = require('./config/db');


require('dotenv').config();


dbConnect();

app.use(express.json())



const categorySchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    image: String},
    
{timestamps: true})

const Category = mongoose.model('Category', categorySchema)
    

app.get('/', (req,res) => {
    res.send("Hello world!")
})

app.post('/categories/add', async (req, res) => {

    try {
        
        console.log("req.body is", req.body)

        const category = await Category.create(req.body)

        console.log("category is", category)


        res.send("Hello from category add")
    } catch (error) {
        console.log("Category add error", error)
    }
})


app.use('/images', express.static('./server/uploads'))


const port = process.env.PORT || 4004;
console.log(port)
app.listen(port, () => {
    console.log('Server is up and running!', port)
})