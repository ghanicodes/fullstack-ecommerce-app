const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');

const adminSchema = new Schema({
      name:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
        trim: true,
        lowercase: true 
    },
   email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate(value){        
           if(!validator.isEmail(value)){
            throw new Error("Invalid Email Address")
           }
        }
    },

    password:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Password is not strong enough")
            }
        }
    },

    role: {
        type: String,
        // required: true,
        enum: ['super-admin', 'admin'],  // sirf ye do values allow hongi
        default: 'admin'                 // agar role na diya ho toh automatically normal admin
    },
     gender: {
        type: String,
        required: true,
        lowercase: true,

        validate(value){
            if(!['male', 'female', 'other'].includes(value)){
                throw new Error("Gender must be male, female or other")
        }}
    },

    age: {
        type: Number,
        required: true,
        min: 18,
        max: 50,
    }

}, {
    collection: 'admins',
    timestamps: true
})

const Admin = mongoose.model('Admin', adminSchema);

module.exports = {
    Admin
};
