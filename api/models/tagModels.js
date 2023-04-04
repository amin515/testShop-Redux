
import mongoose from "mongoose";

const tagSchema = mongoose.Schema({
    name : {
        type : String,
        unique : true,
        trim : true,
    
    },

    slug : {
        type : String,
        unique : true,
        trim : true,
       
    },
    trash : {
        type : Boolean,
        default : false

    },

    status : {
        type : Boolean,
        default : true
    }

}, {
    timestamps : true
})

// export 

export default mongoose.model('tag', tagSchema)