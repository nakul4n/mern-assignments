
const Path=require('path');
const fs=require('fs');
let books=[];

function getallbooks()
{
    console.log('entered getallbooks');
const dbPath=Path.join(__dirname,'db','books-db.json');
fs.readFile(dbPath,(err,data)=>{
    if(err) {
        console.log('error reading db', err);
        return ;
    }

    books=JSON.parse(data);
    
    
    
});

return books;
}
function getbookbyid(id)
{
   getallbooks();
    console.log('sending books details',id);
    
    let book=books.find(b=>b._id===id);
    console.log('book',book);
    
    return book;
    
}
let arr=[];
function deletebook(id)
{
     getallbooks();
    
        for(let book of books){
            if(book._id!==id){
                arr.push(book);
                    console.log("inside for loop",book._id)
            }

        }
      books=arr;
      console.log('books is',books.length);
      console.log('arr is',arr.length);
      /* const dbPath22=Path.join(__dirname,'db','arr-db.json');
        fs.writeFile(dbPath22, JSON.stringify(books), (error)=>{
            if(error){
                console.log('error saving data',error);
            }  
     
        
           
        });    */
       return books;
}
module.exports={
    getallbooks,getbookbyid,deletebook
}