const mongoose = require('mongoose');

module.exports = async () => {

    try {

        mongoose.set('strictQuery', false);

        await mongoose.connect(process.env.URI);
        console.log('Connected');

    } catch (error) {

        console.log('Error', error.message);
        process.exit(1);

    }

};
