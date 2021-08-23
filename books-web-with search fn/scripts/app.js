
const manager = new BookManager();
function displayBookList(parentElementId) {

    let bookList = document.getElementById(parentElementId); //get reference to the tbody
    bookList.innerHTML = ''; //empty the tbody


    for (let book of manager.getAllBooks()) {
        let tr = `
        <tr>
            <td><img  src='${book.cover}'/></td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <a class='primary' href='book-details.html?id=${book._id}'>Details</a>
                <a class='danger' href='#' onclick='deleteBook("${book._id}")'>Delete</a>
            </td>
        </tr>        
        `

        bookList.innerHTML+=tr;
    }

}

function deleteBook(bookId){
    //console.log('deleting book ', bookId);
    manager.removeBook(bookId);
    displayBookList('books');
}

function setHtml(id,content){
    document.getElementById(id).innerHTML=content;
}

function setValue(id,content){
    document.getElementById(id).value=content;
}

function showBookDetails(){
    console.log(window.location.search);
    let id = window.location.search.replace("?id=","");
    console.log('id',id);

    let book=manager.getBookById(id);
    console.log('book',book);

    setHtml('book-title',book.title);
    setHtml('book-author',book.author);
    setHtml('book-details',book.description);
    document.getElementById('cover-image').src=book.cover;

       
}

function getValue(id){
    return document.getElementById(id).value;
}

function addBook(){
    let book={
        _id: getValue('id'),
        title:getValue('title'),
        author: getValue('author'),
        cover:getValue('cover'),
        description: getValue('description'),
    }
    console.log('book',book);
    manager.addBook(book);
    window.location.href="index.html";
    
}
function searchFunction() {
    var stype = document.getElementById("search-type").value;
    var ite =  document.getElementById("search").value;
    var item=ite.toUpperCase();
    if(stype==='a')
    manager.searchbyauthor(item);
    if(stype==='t')
    manager.searchbytitle(item);
    if(stype==='i')
    manager.searchbyid(item);
}
/*
function addreview(){
    
    let r2=document.getElementById('reviewer-name').value;
    let ra2=document.getElementById("reviewer-rating").value;
    let d2=document.getElementById("reviewer-comment").value;
    
     let reviewsob={name:r2,rating:ra2,comment:d2}  
        manager.addreview(reviewsob);
        let reviewsarea = document.getElementById("reviews");
    reviewsarea.innerHTML='';
    
    
                     
        reviewsarea.innerHTML+=` <div class="review">
        <h2>${books.reviews.name} rate ${reviews.rating}</h2>
        <p>${review.comment}</p>
    </div> ` */
                            
                    
