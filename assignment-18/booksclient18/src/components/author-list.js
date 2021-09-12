import React,{useEffect,useState} from 'react';
import "./author-list.css";
import {Link} from 'react-router-dom';
import Loading from './loading';

import {AuthorService} from '../services/author-service';



const Component = () => {

   const [authors,setAuthors]=useState([]);

   useEffect(()=>{
   AuthorService.instance.getAll().then(setAuthors);     
   });

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
                                  <img src={author.photo} height="250px" width="200px"/>
                                 </div> 
                                 <p><h3 style={{fontSize:"1.2em"}}>{author.name}</h3></p>
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