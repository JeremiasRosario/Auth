import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        requiered: [true, 'Name is requiered']
    },

    email: {
        type: String,
        required: [true, 'Email is requiered'],
        unique: true,
    },

    emailValidated: {
        type: Boolean,
        default: false
    },

    password: {
        type: String,
        required: [true, 'Password is requiered'],
    },

    img: {
        type: String,
    },

    role: {
        type: [String],
        default: ['USER_ROLE'],
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },

});

export const UserModel = mongoose.model('User', userSchema);