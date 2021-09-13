import { contains, copyObject, delay } from '../utils/core';
import http from './http';
import axios from 'axios';
const url = 'http://localhost:80/api/books/';



export class AuthorService {

    static instance = new AuthorService();

    
    getAll=async ()=>{
        try{
              console.log("in getalllll");
            let response=await  http.get('author'); 
            console.log('response',response);
            return response.data;
              
        }catch(error){
            console.log('error',error);
            return null;
        }
    };

    

    addAuthor = async (author) => {
        try{
            //let response=await axios.post(url,book);            
            let response= await http.post('author',author);
            return {success:true, data:response.data};

        }catch(error){

            console.log('error posting data', error);
            return {success:false, error:error};
        }
    }

    async update(author) {
        
        const id=author.id;
        try{
            let response=await http.put(`/author/${id}`,author);
            return {success:true,data:response};
        }catch(error){
            return {success:false, error:error};
        }
    }

    getAuthorById = async (id) => {
        try{
            //let response=await axios.get(`${url}/${isbn}`);
            let response= await http.get(`author/${id}`);
            console.log('author by id', response.data);
            return response.data;
        }catch(error){
            console.log('error fetching author by id',error);
            return undefined;
        }
    }
}
