import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './search-bar';
import MemberToolbar from './member-toolbar';
import $ from 'jquery';


const Component = ({ title }) => {

    useEffect(()=>{
        // $('.navbar-collapse a').click(function(){
        //     $(".navbar-collapse").removeClass('show');
        // });
    },[]);

    return <nav className="navbar navbar-expand-lg  navbar-dark bg-dark" >
        <Link className="navbar-brand" to="/">{title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active" data-toggle="collapse" data-target="#navbarSupportedContent" >
                    <Link className="nav-link"  to="/book/list">Books <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item" data-toggle="collapse">
                    <Link className="nav-link" data-toggle="collapse" data-target="#navbarSupportedContent" to="/book/add">Add Book</Link>
                </li>
                <li className="nav-item" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <Link className="nav-link" to="/author/manage">Authors</Link>
                </li>
               

            </ul>
            <SearchBar onSearch={text=>console.log('searching for ',text)}/>
            
           
        </div>
        <MemberToolbar/>
    </nav>;

};

export default Component;