import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './loading';
import NotFound from './not-found';
import ConfirmPopup from './confirm-popup';
import BookThumbnail from './book-thumbnail';
import { BookService } from '../services/book-service';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import {getAllBooks} from '../store/books-action';


const BookList = () => {

    const books = useSelector(state => state.books);
 
    const dispatch=useDispatch();

    useEffect(()=>{
        if(books.length===0){
            getAllBooks(dispatch);    
        }
    },[]);







    if (books === null) {
        return <NotFound title="Error Connecting to Server" message="Pls try a little Later" />
    }

    if (books.length === 0) {
        return <Loading text="building our recommendation" />
    }

    return (
        <div >
            <h2>Our Recommendations</h2>
            
          
           
       
       <div class='grid-view-container'>
           {books.map(book=><BookThumbnail book={book} />)}
       </div>

    </div>);
}

export default BookList;