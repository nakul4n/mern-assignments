import React from 'react';
import {LabeledInput} from './input-controls';


const Component=()=>{

   
    return (
        <form>
            <h2>User Sign In</h2>
            <LabeledInput id="Enter username" />
            <LabeledInput  id="Enter password"  />
            <button  type="submit" className='btn  btn-primary'>Sign In</button>
        </form>
    );
};


export default Component;