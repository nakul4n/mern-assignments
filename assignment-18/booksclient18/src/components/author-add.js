import React, {useState}from 'react';
import AuthorEditor from './author-editor'
import {AuthorService} from '../services/book-service';
import {useHistory} from 'react-router-dom';


const Component=()=>{

    const history=useHistory();

    const author={
        name:'',
        id:'',
        photo:'',
        biography:'',
       
    };

    const handleSave=(author)=>{
        //AuthorService.instance.addAuthor(author);
        history.push('/author/list'); 
    };

    return (
        <div>
            <h2>Add New Author</h2>
            <AuthorEditor author={author} onSave={handleSave}/>
        </div>
    );
};


export default Component;