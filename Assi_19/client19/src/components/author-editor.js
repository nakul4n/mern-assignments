import React, {useState}from 'react';
import {LabeledInput,LabeledTextArea} from './input-controls';
import ValidationErrors from './validation-errors';
import {useHistory} from 'react-router-dom';


const AuthorEditor=(props)=>{

    const [author,setAuthor]=useState(props.author);
    const [errors,setErrors]= useState(null, props);
    const history=useHistory();

   

    const handleSave=async(e)=>{
        e.preventDefault();
        const result= await props.onSave(author);
        if(result.success)
            history.push('/author/list'); 
        else{
            const _errors= result.error.response.data.error.errors;
            setErrors(_errors);
        }        
    }

    

    const handleChange=(id,value)=>{
        author[id]=value;
        setAuthor({...author});
    }

    return (
        <form>
            
            <LabeledInput value={author.name} id="name" onChange={handleChange} />
            <LabeledInput value={author.id} id="id" onChange={handleChange} />
            <LabeledInput value={author.photo} id="photo" onChange={handleChange} />
            <LabeledTextArea value={author.biography} id="biography" onChange={handleChange} />
            <button onClick={handleSave} type="submit" className='btn  btn-primary'>Save</button>
            <ValidationErrors error={errors} />
        </form>
    );
};

export default AuthorEditor;