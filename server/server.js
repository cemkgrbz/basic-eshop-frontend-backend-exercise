const express = require('express');

require('dotenv').config();

const app = express();

const dbConnect = require('./config/db');
dbConnect();

app.use(express.json())
app.use('/users', require('./routes/userRoutes'))
app.use('/products', require('./routes/productRoutes'))

    

app.get('/', (req,res) => {
    res.send("Hello world!")
})

const port = process.env.PORT || 4004;
console.log(port)
app.listen(port, () => {
    console.log('Server is up and running!')
})