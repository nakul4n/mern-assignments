const express=require('express');
const path = require('path');



const getRouter=()=>{

    let router=express.Router();

    router.get('/details/id=:id',(request,response)=>{

            let id= request.params.id;
            console.log('sending books details', request.params.id);
            
            //let book=books.find(b=>b._id===id);
            response.sendFile(path.join(__dirname+'/public/details.html'));
            
            
            //response.send('/details',id); 
        }); 
       


    return router;
}

module.exports=getRouter;






