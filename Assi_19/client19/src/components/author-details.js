import React, {useState,useEffect}from 'react';
import "./author-details.css";
import Loading from './loading';
import NotFound from './not-found';
import {withRouter} from 'react-router-dom';
import {AuthorService} from '../services/author-service';


const Component=(props)=>{

    const [author,setAuthor]=useState(null,props,);
    const id=props.match.params.id;
    useEffect(()=>{
       
        AuthorService.instance.getAuthorById(id).then((author)=>{
            console.log(`got for ${id}: ${author}`);
            setAuthor(author);
        });        
    },[props.match.params.id]);
    
    if(author===null){
        return <Loading title={`searching for ${id}`} />
    }

    if(author===undefined){
        return <NotFound message={`Sorry no author with id: ${id} present`}/>
    }


    return (
        <div>
            <h2>{author.name}</h2>
            
            <div className='author-det'>
                <img src={author.photo} width="400px" height="400px"/>
                <div className='author-bio'>
                    <h4>Biography</h4>
                    <p>{author.biography}</p>
                    </div> 
                </div>
            </div>
        
    );
}


export default withRouter(Component);