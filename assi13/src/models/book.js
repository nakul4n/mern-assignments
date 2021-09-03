const mongoose = require('mongoose');



const books = mongoose.Schema({
   
    title: String,
    isbn:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    description:String,
    tags:{
        type:Array,
        required:false
    },
    cover:String,

    reviewslist:Array
    //reviewslist:[{name:String,comment:String,rating:Number}]                         
   
});


const Book= mongoose.model('book', books);

module.exports={
    Book
}