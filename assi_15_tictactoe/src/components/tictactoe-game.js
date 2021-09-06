import React from 'react'
import StatusMessage from './status-message';
import TicTacToeBoard from './tictactoe-board';
import Game from '../service/game';















const _component=(props)=>{

    return (
        <div>
            <StatusMessage message="Next Move 'O'"/>
            <TicTacToeBoard/>
            <button>Reset</button>
        </div>
    );

}


class component extends React.Component{
    
    constructor(props){
        super(props);

        this.state={
            cells:[  null,null,null,
                     null,null,null,
                     null,null,null
                ],
            next:'O',
            msg:"Next Move 'O'"
        }
        //this.handleCellClick= this.handleCellClick.bind(this);
    }
    reset=()=>{
        const cells=[  null,null,null,
            null,null,null,
            null,null,null
       ];
       const next='O';
       const msg="Next Move 'O'";

       this.setState({cells,next,msg});
    }

    handleCellClick=(id)=>{
        let next=this.state.next;

        //const cells= this.state.cells; //I am accessing current cells to modify

        const cells=[...this.state.cells]; //create a new array with old values
        cells[id]=next;  //change one cell in the new array


        next= next==='O'?'X':'O';  //get new value for next
        const msg=`Next Move '${next}'`
        //update the states
     
        this.setState({cells,next,msg});
       



    };
    render=()=>{
        return(
        <div>
        <StatusMessage message={this.state.msg}/>
        <TicTacToeBoard cell={this.state.cells} handleCellClick={this.handleCellClick}/>
        <button onClick={this.reset}>Reset</button>
    </div>
        );
    }
        
}

export default component;