import mongoose from 'mongoose';

const { Schema, model } = mongoose;
/create user schema
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'customer' }
}, { timestamps: true })


const USER = model('user', userSchema)
// export USER model
export default USER;
