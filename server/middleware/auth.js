const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {

    try {
        console.log('Hello from auth')

        const token = req.cookies['e04-eshop']

        console.log("🚀 ~ file: auth.js:7 ~ module.exports= ~ cookies", token)

        const decoded = jwt.verify(token, process.env.SECRET)
        console.log("🚀 ~ file: auth.js:14 ~ module.exports= ~ decoded", decoded)

        req.user = decoded.id

        next() //calls the next function in the pipeline

    } catch (error) {
        console.log("🚀 ~ auth error", error.message)

        res.send({success: false, error: error.message})
    }
   
}
