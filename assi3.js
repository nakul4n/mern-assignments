let books= [
	
	{  title:'book1', author:'author1',price:100,rating:1},

	
	{
        title:'book2', author:'author2',price:200,rating:2},

	
	{
        title:'book3', author:'author3',price:300,rating:4}


];

function print(book)
{
console.log('title \t author\t price\t Rating');
for(let i of books){
console.log(`${i.title}\t ${i.author}\t ${i.price}\t ${i.rating}`)
               }
}

function avgprice(books)
{
   var a=0;
   for(let j of books)
   {
       a+=j.price;
   }
   var avg=a/(books.length);
   
   return avg;

}



  function authorsearch(book,entry) {
     for(let i of books)
     {
         if(i.author===entry)
         console.log(`${i.title}\t ${i.author}\t ${i.price}\t ${i.rating} \t author match`)
     }
    }
    function titlesearch(book,entry) {
        for(let i of books)
        {
            if(i.title===entry)
            console.log(`${i.title}\t ${i.author}\t ${i.price}\t ${i.rating} \t title match`)
        }
       }
     function pricerange(book,high,low) {
        for(let i of books)
        {
            if(i.price>=low&&i.price<=high)
            console.log(`${i.title}\t ${i.author}\t ${i.price}\t ${i.rating}\t books in price range`);
        }
    }
        function ratingrange(book,high,low) {
            for(let i of books)
            {
                if(i.rating>=low&&i.rating<=high)
                console.log(`${i.title}\t ${i.author}\t ${i.price}\t ${i.rating}\t books in given range of rating`);
            }
        }

    /* function newobj(book)
     { let newob=[];
        for(let i of books)
        {
            newob.push({i.title,i.price});
        }
    }
*/
     



function avgrating(books)
{
    var r=0;
    for(let k of books)
    {
        r+=k.rating;
    }
    var ratingav=r/(books.length);
    
    return ratingav;

}

let printt=print(books);

let avgpricee=avgprice(books);
console.log('avgprice',avgpricee);
let avgratingg=avgrating(books);
console.log('avgrating',avgratingg);

let au=authorsearch(books,'author2');
let ti=titlesearch(books,'book2');

let pr=pricerange(books,200,100);
let rr=ratingrange(books,3,1);

