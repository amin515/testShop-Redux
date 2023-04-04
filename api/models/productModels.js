

import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
      name: {
        type: String,
        unique: true,
        trim: true,
      },
  
      slug: {
        type: String,
        trim: true,
      },
  
      short_desc: {
        type: String,
        trim: true,
      },
  
      long_desc: {
        type: String,
        trim: true,
      },
  
      regular_price: {
        type: Number,
        trim: true,
      },
  
      sale_price: {
        type: Number,
        trim: true,
      },
      categories: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "categoryModels",
        default : []
      },
      brands: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "brandModels",
        default : null
      },
      tags: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "tagModels",
        default : []
      },
      stock: {
        type: Number,
        default: null,
      },
  
      photo: {
        type: String,
        default: null,
        trim: true,
      },
      gallary: {
        type: Array,
        default: null,
      },
  
      trash: {
        type: Boolean,
        default: false,
      },
  
      status: {
        type: Boolean,
        default: true,
      },
    },
    {
      timestamps: true,
    }
  );

  

// export 
export default mongoose.model('product', productSchema)