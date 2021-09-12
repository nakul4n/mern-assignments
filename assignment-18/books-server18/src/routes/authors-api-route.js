const express=require('express');
const {AuthorService}=require('../services/author-service');
const {handleRequest}=require('../utils/express-utils');




const getRouter= ()=>{

 
   const service=new AuthorService();


    let router=express.Router();
  //  console.log(router);
    router  
        .route("/")    
        .get(handleRequest(service.getAllAuthors))
        .post(handleRequest(service.addAuthors));
  

    
    router 
    .route('/:id')
    .get(handleRequest(service.getAuthorById))
    .put(handleRequest(service.updateAuthor))
    .delete(handleRequest(service.deleteAuthor));


 
  router.get('/:id/books',handleRequest(service.getBooksOfAuthor));

  return router;
};


module.exports=getRouter;

