let books= [ 
    
        new Book('The Accursed God','Vivek Dutta Mishra',399),
        new Book('The Count of Monte Cristo','Alexandre Dumas',450),
        new Book('The Hobbit ','Alexandre Dumas',450),
        new Book(' The Lord of the Rings ','J R R Tolkien',480)
        //add few more books here
];


books[0].addReview(createReview('Great book on Mahabharata',4.4));
books[0].addReview(createReview('Just another book! Not that great', 4));

books[1].addReview(createReview('One of all time greatest classic',4.8));
books[1].addReview(createReview('Adventure, excitement and lengthy', 4.2));

books[2].addReview(createReview('One of all time greatest horror',4.8));
books[2].addReview(createReview('good', 4.5));
books[3].addReview(createReview('best one',4.8));
books[3].addReview(createReview('better one', 4.3)); 




function showBook(book){

    document.getElementById("bookTitle").innerHTML=book.title;
    document.getElementById("bookAuthor").innerHTML=book.author;
    document.getElementById("bookPrice").innerHTML=book.price;
    document.getElementById("rat").innerHTML=`${index+1} of ${books.length}`;

    var r=book.getRating();

    document.getElementById("ratingg").innerHTML=r;
     
    let reviews = document.getElementById("reviews");
    reviews.innerHTML='';

    for(let review of book.reviews){
        reviews.innerHTML+=`
                            <tr>
                                <td>${review.description}</td>
                                <td>${review.rating}/5</td>
                            </tr>
                            `
    }
}

let index=0;


function next(){
    index++;;
    if(index>=books.length)
        index=books.length-1;
    showBook(books[index]);
}

function previous(){
    index--;
    if(index<=0)
        index=0;
    showBook(books[index]);
}



