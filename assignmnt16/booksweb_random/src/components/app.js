import React from 'react'
import AppHeader from './app-header';
import AppFooter from './app-footer';
import AppHome from './app-home';

const component=({title})=>{
    const q=["quote1","quote2","quote3","quote4","quote5"]
    const img=['/images/coverpage.jpg','/images/bookcover1.jpg','/images/bookcover2.jpg','/images/bookcover3.jpg']
    const randq=q[Math.floor(Math.random()*q.length)];
    const image=img[Math.floor(Math.random()*img.length)];

    return <div className='main'>
            <AppHeader title={title} />
            <div className='container'>
                <AppHome quote={randq} cover={image}/>
            </div>

            <AppFooter copyright="conceptarchitect.in" url="http://conceptarchitect.in" />
        </div>
};


export default component;