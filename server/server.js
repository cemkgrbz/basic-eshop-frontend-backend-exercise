const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

require('dotenv').config();


const dbConnect = require('./config/db');
dbConnect();

app.use(cookieParser())
app.use(express.json())
app.use('/users', require('./routes/userRoutes'))
app.use('/products', require('./routes/productRoutes'))
app.use('/categories', require('./routes/categoryRoutes'))


    

app.get('/', (req,res) => {
    res.send("Hello world!")
})


app.use('/images', express.static('./server/uploads'))


const port = process.env.PORT || 4004;
console.log(port)
app.listen(port, () => {
    console.log('Server is up and running!', port)
})

// console.log('string:', Math.random().toString(36).slice(2))