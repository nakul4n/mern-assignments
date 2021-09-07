import React from 'react'

class component extends React.Component{
    constructor(){
        super();

        this.state={
           time: new Date()
        }
        
       this.refresh()
        }
    
 refresh=()=>{
    setInterval(()=>{
         
         this.setState({time:new Date()})
     },1000);
 }
render=()=>{
    return(
    <div>{this.state.time.toLocaleTimeString()} 
        </div> )}}
             
export default component;