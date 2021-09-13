const { response } = require('express');
const {Author} = require('../models/author');
const {Book} = require('../models/book');
const {ServiceError}= require('../utils/service-error');






class  AuthorService{

    constructor(){
       
        
        const functions=[ this.getAllAuthors, 
                          this.addAuthors, 
                          this.getAuthorById, 
                          this.getBooksOfAuthor,
                          this.deleteAuthor,
                          this.updateAuthor,
                          
                        ];

        for(let f of functions){
           
            this[f.name] = f.bind(this);
        }
    }    

    async getAllAuthors(){
        //console.log("getting au");
        return await Author.find();
    }

    async getAuthorById({id}){
        
        let author=await Author.findOne({id:id});
        if(!author)
            throw new ServiceError(404, "Invalid Author Id", {id:id});
        else
            return author;       

    }

    async getBooksOfAuthor({id}){
        let author=await Author.findOne({id:id});
        if(!author)
            throw new ServiceError(404, "Invalid Author Id", {id:id});
        else
            {   const authorname= author.name;
                
            return await Book.find({author:authorname});

            }

    }
    
    async addAuthors({body}){
        try{
           

            let authorData={...body};
            console.log('authorData',authorData);
            let newAuthor= new Author({...body});
            console.log('new author',newAuthor);
            await newAuthor.save();
            return newAuthor;
        } catch(error) {
            console.log('error saving', error);
            if(error.constructor.name==="ServiceError")
                throw error;
            else
                throw new ServiceError(400, error.message, {error});
        }
    }


   

   
    async deleteAuthor({id}){
        try{
        let author=await this.getAuthorById({id});
        await author.delete();
        }catch(e){
            console.log(e); 
        }

    }

    async updateAuthor({id,body}){
         let author=await this.getAuthorById({id});
         await Author.findOneAndUpdate({id:id},body);
         return await Author.findOne({id:id});
    }

  
  


    

}

module.exports={AuthorService}