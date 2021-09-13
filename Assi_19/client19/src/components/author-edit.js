import React, {useState,useEffect} from 'react';
import AuthorEditor from './author-editor'
import Loading from './loading';
import NotFound from './not-found';
import {AuthorService} from '../services/author-service';
import {useParams, useHistory} from 'react-router-dom';

const Component=(props)=>{

    console.log('props',props);
    const[author,setAuthor]=useState(null);
    const {id}=useParams();
    console.log('id',id);

    const history=useHistory();
    const [errors,setErrors]= useState(null, props);
    
    useEffect(()=>{
        AuthorService.instance.getAuthorById(id).then(setAuthor);
    })

    if(author===null){
        return <Loading title="getting details"/>
    }

    if(author===undefined){
        return <NotFound title="Author Not Found" message={`Missing id: ${id}`}/>
    }

    const handleSave=async (author)=>{
        
        const result= await AuthorService.instance.update(id,author);
        if(result.success)
            history.push('/author/list'); 
        else{
            const errors_got= result.error.response.data.error.errors;
            setErrors(errors_got);
        }
    };

    return (
        <div>
            <h2>Edit Author info</h2>
            <AuthorEditor author={author} error={errors} onSave={AuthorService.instance.update}/>
        </div>
    );
};


export default Component;