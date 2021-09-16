import React, { useState,useEffect } from 'react';
import { LabeledInput,LabeledTextArea } from './input-controls';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserAlt,faTags, faImage, faInfo,  faKey , faWindowClose, faUserPlus } from '@fortawesome/free-solid-svg-icons'

import {useSelector,useDispatch} from 'react-redux';

import {addBook} from '../store/books-action';
import * as ActionNames from '../store/action-names';


const Component = () => {


 
    const book={
        isbn:'',
        title:'',
        author:'',
        price:0,
        description:'',
        cover:''
    };
 
    

    const [books, setBook] = useState(null);


    //const history = useHistory();
    let status=useSelector(state => state.status);
    const dispatch=useDispatch();

    if(status.type===ActionNames.STATUS_ERROR){
        console.log('error',status.error);
    }




    const handleChange = (id, value) => {
        book[id] = value;
        setBook({ ...book });
    }

    const handleSave = async(e) => {
        e.preventDefault();
            addBook(dispatch,book);
      
    }


    

    return (
        <div>
          <h2>Add New Book</h2>
    <div>           
        
        <div >
            
       
                    
                    <form>
                    <LabeledInput value={book.isbn} id='isbn' onChange={handleChange} />
            <LabeledInput value={book.title} id="title" onChange={handleChange} />
            <LabeledInput value={book.author} id="author" onChange={handleChange} />
            <LabeledInput value={book.price} id="price" onChange={handleChange} />
            <LabeledInput value={book.cover} id="cover" onChange={handleChange} />
            <LabeledTextArea value={book.description} id="description" onChange={handleChange} />
            <button onClick={handleSave} type="submit" className='btn  btn-primary'>
            
                            <FontAwesomeIcon icon={faUserPlus}/>
                             Add
                        </button>
                      
                      
                        
                    </form>
                </div>
              
            </div>
 
        </div>
           );
};

export default Component;