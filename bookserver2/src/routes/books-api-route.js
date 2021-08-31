const express=require('express');
const {getallbooks}=require('../booksfn')
const {getbookbyid}=require('../booksfn')
const {deletebook}=require('../booksfn')

const getRouter= ()=>{

   // console.log('setting up the routes');
    let router=express.Router();
  //  console.log(router);
    router  
        .route("/")     
        .get( (request,response)=>{
            console.log('inside book list route')
            response.send(getallbooks());
        })
        .post((request,response)=>{
            response.send('Add new book');
        });


    router
    .route('/:id')
    .get( (request,response)=>{

        response.send(getbookbyid(request.params.id));
    })
    .put((request,response)=>{
        response.send('Update book by id:'+request.params.id);        
    })
    .delete((request,response)=>{
        response.send(deletebook(request.params.id));        
    });

    return router;


};


module.exports=getRouter;

