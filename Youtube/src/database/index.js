import mongoose from "mongoose";
import { DB_NAME } from '../constants.js'

// export database connection
export const connectDB = async () => {
    try {
        const dbConnect = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(dbConnect.connection.host)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
