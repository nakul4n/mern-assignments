const { response } = require('express');
const {Book} = require('../models/book');
const {ServiceError}= require('../utils/service-error');

function bindMethods(object){
    console.log('started binding...',object);
    for(let prop in object){
        let propValue=object[prop];
        console.log('prop',prop);
        if(typeof(propValue)==='function'){
            console.log('binding', propValue);
            propValue.bind(object);
        }
    }
}

class  BookService{

    constructor(){
        //bindMethods(this);   
        
        const functions=[ this.getAllAuthors, 
                          this.getAllBooks, 
                          this.addBook, 
                          this.getBookByIsbn, 
                          this.getBooksByAuthor,
                          this.getBooksByTag,
                          this.getBooksByTitle, 
                          this.removeBook,
                          this.updateBook,
                          this.search,
                          this.addReviews,
                          this.getReviews
                        ];

        for(let f of functions){
            //console.log(f.name); 
            this[f.name] = f.bind(this);
        }
    }    

    async getAllBooks(){
        return await Book.find();
    }

    async getBookByIsbn({id}){
        
        let book=await Book.findOne({isbn:id});
        if(!book)
            throw new ServiceError(404, "Invalid Book Id", {isbn:id});
        else
            return book;       

    }

    async addBook({body}){
        try{
            let newBook= new Book(body);
            await newBook.save();
            return newBook;
        } catch(error) {

            throw new ServiceError(400, error.message, {error});

        }
    }

    async getAllTitles(){

        let books=await Book.find({},{title:true}).sort({title:1});
        let titles= books.map(book=>book.title);

        return titles;

    }

    async removeBook({id}){
        try{
        let book=await this.getBookByIsbn({id});
        await book.delete();
        }catch(e){
            console.log(e);
        }

    }

    async updateBook({id,body}){
         let book=await this.getBookByIsbn({id});
        return await Book.findOneAndUpdate({isbn:id},body);
    }
    async getAllAuthors(){
        return await Book.distinct('author');
    }
    async getBooksByAuthor({author}){
        const a= new RegExp(author,'i');
        return await Book.find({author:a})
    }

    async getBooksByTitle({title}){
        return await Book.find({title:/title/i})
    }

    async getBooksByTag({tag}){
        return await Book.find({tag:/tag/i})
    }

    async search({ q}){
        const a= new RegExp(q,'i');
        return await Book.find( { $text: { $search: a } })
    }
    async addReviews({body}){
        try{
        const reviews=body;
        console.log("review is", reviews);
        for await (let review of reviews){
            
            let book= await Book.findOne({title:review.title});
            console.log("book t is", book.title);
            if(!book){
                console.log(`couldn't find the book : ${review.title}`);
            } else { console.log("review.comment",review.comment);
            console.log("review.rat",review.rating); 
                     
                book.reviews.push(review);
                console.log("review added",book.reviews);
                await book.save();
                console.log(`Review of ${review.title} by ${review.name} saved`);
            }
        }
    }
    catch(e){ console.log(e);}
    }

    async getReviews({id}){
        
        console.log("in getReview");
        let book=await Book.findOne({id},{reviews:1});
        console.log("book",book);
        if(!book)
            throw new ServiceError(404, "Invalid Book Id", {isbn});
        else
            return book;       

    }

}

module.exports={BookService}