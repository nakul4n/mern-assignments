import React from 'react';
import {LabeledInput} from './input-controls';


const Component=()=>{

   
    return (
        <form>
            <h2>User Register</h2>
            <LabeledInput id='Name' />
            <LabeledInput  id="Enter a password"  />
            <LabeledInput  id="Confirm password"  />
            <button  type="submit" className='btn  btn-primary'>Sign Up</button>
        </form>
    );
};


export default Component;