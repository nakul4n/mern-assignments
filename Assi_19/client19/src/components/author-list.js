import React,{useEffect,useState} from 'react';
import "./author-list.css";
import {Link} from 'react-router-dom';
import Loading from './loading';
import NotFound from './not-found';
import {AuthorService} from '../services/author-service'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash, faInfo, faEdit, } from '@fortawesome/free-solid-svg-icons'



const Component = () => {

   const [authors,setAuthors]=useState([]);

   useEffect(()=>{
   AuthorService.instance.getAll().then(setAuthors);     
   }, []);
    
   if (authors === null) {
    return <NotFound title="Error Connecting to Server" message="Pls try a little Later" />
}

    if(authors.length===0){
        return <Loading text="building authors list"/>
    }

    return (
        <div classname='authorlist'>
            <h2 >Authors</h2>

                

                            <div className='grid'>
                           {authors.map((author) => (
                              <div className="innergrid">
                                  <div>
                                  <Link to={`/author/details/${author.id}`} ><img src={author.photo} height="250px" width="200px"/></Link>
                                 </div> 
                                 <p><h3 style={{fontSize:"1.2em"}}>{author.name}</h3></p>
                            
                                    <Link to={`/author/edit/${author.id}`} className='btn btn-sm   btn-secondary'><FontAwesomeIcon icon={faEdit} /></Link>
                               {//<Link to="/book/add" className='btn btn-sm  '>Add Book</Link>}
                               }
                             </div>       
                                   
                        ))
                    }
                    </div>



              

   </div>    
)
                }
export default Component