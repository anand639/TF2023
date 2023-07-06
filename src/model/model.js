const mongoose= require('mongoose')

const empSchema= new mongoose.Schema({
    name:{
        type:String,
        required : true,
     },

    email:{
        type : String,
        required : true,
        unique : true,
    },

    school:{
        type:String,
        required:true,
    },

    class:{
        type:String,
        required:true,
    },
    score: { 
        type: Number,
        default: 0,
     },
});

const empCollection = new mongoose.model('empcollection' , empSchema);

module.exports = empCollection;