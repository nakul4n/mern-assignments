import React, {useState,useEffect}from 'react';
import "./book-details.css";
import {withRouter} from 'react-router-dom';
import {BookService} from '../services/book-service';
import StarRating from './star-rating';
import Loading from './loading';
import NotFound from './not-found';
import { useSelector, useDispatch } from 'react-redux';
import {getAllBooks,selectBook} from '../store/books-action';



const BookDetails = () => {

    
    const book=useSelector(state => state.selectedBook);
    const dispatch=useDispatch();

    useEffect(()=>{
        if(book.length===0){
            getAllBooks(dispatch);    
        }
    },[]);


  
    if(book===null){
        return <Loading title={`searching for ${book.isbn}`} />
    }

    if(book===undefined){
        return <NotFound message={`Sorry no book with isbn: ${book.isbn} present in our record`}/>
    }


    return (
        <div className='book-details'>
            <h2>{book.title}</h2>
            <h3>by {book.author}</h3>
            
            <div className='book-info'>
                <img src={book.cover}/>
                <div className='info'>
                    <ul>
                        <li>Price: {book.price}</li>
                        <StarRating rating={book.rating} />
                    </ul>
                    <hr/>
                    <h4>Synopsis</h4>
                    <p>{book.description}</p>
                    {/* <Expander title="Synopsis" content={book.description} short={200} /> */}
                </div>
            </div>
        </div>
    );
}


export default BookDetails;