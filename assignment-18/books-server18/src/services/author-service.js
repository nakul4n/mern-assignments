const { response } = require('express');
const {Author} = require('../models/author');
const {Book} = require('../models/book');
const {ServiceError}= require('../utils/service-error');


const makeId= name=> name.toLowerCase().replace(' ','-');



class  AuthorService{

    constructor(){
        //bindMethods(this);   
        
        const functions=[ this.getAllAuthors, 
                          this.addAuthors, 
                          this.getAuthorById, 
                          this.getBooksOfAuthor,
                          this.deleteAuthor,
                          this.updateAuthor,
                          
                        ];

        for(let f of functions){
            //console.log(f.name); 
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

   
    
    async addAuthors({body}){
        //console.log("in add fn");
        //console.log("body is",body);

        var names=body;
         //console.log(names);
        for await (const name of names){
            let author=new Author({
                name,    
                id: makeId(name),
                photo: `/images/authors/${makeId(name)}.jpg`,
                biography:`Author ${name}`
            });
    
            await author.save();
            console.log(`author ${author.name} added`);
    
        }
    
        console.log('All Authors Added');
    
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
       return await Author.findOneAndUpdate({id:id},body);
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


    

}

module.exports={AuthorService}