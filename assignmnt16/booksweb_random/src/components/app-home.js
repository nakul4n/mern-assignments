import React from 'react';


const component = (props)=>{

    return <div className='body'>
        <h2>Home!</h2>
        <p>Welcome to the Book's web Home page.</p>
        <p>{props.quote}</p>
        <img className='coverimage' src={props.cover} alt="Book's Home"/>
    </div>

};

export default component;