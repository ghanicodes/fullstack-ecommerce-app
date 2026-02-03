const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
        minlength: [3, "Product name must be at least 3 characters"],
        maxlength: [100, "Product name cannot exceed 100 characters"],
    },

    price: {
        type: Number,
        required: [true, "Product price is required"],
        min: [0, "Price cannot be negative"],
    },

    description: {
        type: String,
        trim: true,
        maxlength: [500, "Description cannot exceed 500 characters"],
        default: "No description provided",
    },

    category: {
        type: String,
        required: [true, "Category is required"],
        trim: true,
        lowercase: true,
    }

}, {
    collection: 'products',
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = {
     Product
     };