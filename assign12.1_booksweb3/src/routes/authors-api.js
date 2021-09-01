const express=require('express');
const {BookModel} =require('../models/book');


const getRouterAuthor= ()=>{

    let router=express.Router();
    router  
        .route("/")     
        .get(async (request,response)=>{
            
            let books=await BookModel.find().distinct("author");
            response.json(books);

        })

    return router;
};


module.exports=getRouterAuthor;

