const express=require('express');
const {UserModel} =require('../models/users');


const getRouterUser= ()=>{

  
    let router=express.Router();
    router  
        .route("/")     
        .get(async (request,response)=>{
            
            let users=await UserModel.find();
            response.json(users);

        })
        router  
        .route('/register') 
        .post(async (request,response)=>{
            try{
                let userData=request.body;
                let user= new UserModel(userData);
                let result=await user.save();
                response.status(201).json(result);
            } catch(err){
                response.status(400).json({error:err, message:err.message});
            }
        });

        router  
        .route('/login') 
        .post(async (request,response)=>{
            try{
                let userData=request.body;
                let user= new UserModel(userData);
               let name=user.name;
                let pas=user.password;
                //console.log("nam got",user.name);
                //console.log("passw got",user.password);
                let usergot=await  UserModel.findOne({name:name,password:pas});
                if(usergot)
                response.json(usergot);
            else{
                response.status(404).json({error:'Invalid credentials'});
            } 
            }catch(err){
                response.status(400).json({error:err,message:err.message});
            }
        });
        return router;


    };

    module.exports=getRouterUser;
    
