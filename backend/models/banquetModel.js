const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    
    name: {
      type: String,
      required: true,  
      trim: true,      
    },

    description: {
      type: String,
      required: true,  
      trim: true,      
    },

    
    images: {
      type: [String],
      required: true,  
    },

    price: {
      type: Number,
      required: true,  
    },

    category: {
      type: String,
      enum: ['Hall', 'Catering', 'Decoration', 'Package'], 
      required: true,
    },

    
    createdAt: {
      type: Date,
      default: Date.now,  
    },

      location: {
        type: String,
        required: true,  
      },
  },
  {
    timestamps: true,  
  }
);


const Product = mongoose.model('Product', productSchema);


module.exports = Product;
