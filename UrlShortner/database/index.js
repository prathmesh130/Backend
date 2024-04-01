const mongoose = require('mongoose')

// connect database function
const connectDB = async () => {
    try {
        const dbConnect = await mongoose.connect(`${process.env.MONGODB_URI}/shoeshopee`)
        console.log(dbConnect.connection.host)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

// export database connection
module.exports = connectDB
