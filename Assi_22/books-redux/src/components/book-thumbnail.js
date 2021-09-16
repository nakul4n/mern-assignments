import React,{useLayoutEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {getAllBooks,selectBook} from '../store/books-action';

const Component=({book})=>{
    const dispatch=useDispatch();
    const select=()=>{
    selectBook(dispatch,book);
    }
    const getSize=()=>{
        const width=window.innerWidth/4;
        const height=width*8/5;
        return {width,height};
    }

    const [size,setSize]=useState(getSize());

    useLayoutEffect(()=>{
        const updateSize=()=> setSize(getSize());
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    },[]);

    

    const image={
        backgroundImage:`url(${book.cover})`,
        backgroundSize:'cover',        
       
        width:size.width,
        height:size.height
    }

    const contentStyle={
        backgroundColor:`rgba(255,255,255,0.5)`,
        paddingTop:"70%",
        textAlign:"center"
    }

    const h3Style={
        fontSize:"1em"
    }
    const handleSelectBook=(book)=>{
        selectBook(dispatch,book);
    }

    return (
        <div className="grid-view-item">
            <Link onClick={()=>handleSelectBook(book)} to={`/book/details/${book.isbn}`}>
                
                <img src={book.cover} alt={book.title} title={book.title}/>
            </Link>
            
        </div>);
}

export default Component;