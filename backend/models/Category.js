import mongoose from "mongoose";

// Product schema
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    }
  
}, { timestamps: true });  // This adds createdAt and updatedAt fields

const Category = mongoose.model('Category', categorySchema);

export default Category;

