import React from 'react'
import StatusMessage from './status-message';
import TicTacToeBoard from './tictactoe-board';
import Game from '../service/game';
import Pos from './position';


class component extends React.Component {

    constructor(props){
        super(props);
        this.game=new Game();
        this.state= {...this.game, status:'Next Move "O'};
    }

    getInitialState=()=>{
        return {
            cells:[  null,null,null,
                     null,null,null,
                     null,null,null
                ],
            next:'O',  
            winner:null,          
            status:'Next Move "O"',
            datas:[null,null]
           
           
           
        }
    }

    khandleCellClick=(id)=>{

        if(this.game.move(id)){

            this.setState({cells:[...this.game.cells]});

            if(this.game.winner){
                this.setState({status:`"${this.game.winner}" Wins`});
                this.setState({winner:this.game.winner, winningCombo:this.game.winningCombo});
                this.setState({moves:9});
                return ;
            }

            if(this.game.isStalemate()){
                this.setState({status:"Game is Stalemate"});
                return ;
            }

            this.setState({next: this.game.next});
            this.setState({moves:this.game.moves});
           

        }


    }


    handleCellClick=(id)=>{
        let next=this.state.next;

        //const cells= this.state.cells; //I am accessing current cells to modify

        const cells=[...this.state.cells]; //create a new array with old values
        cells[id]=next;  //change one cell in the new array
        this.setState({cells});

        let winner= this.game.check(cells);
        if(winner){
            this.setState({winner,status:`"${cells[winner[0]]}" Wins`,next:null});
            return ;
        }

        if(this.game.isStalemate(cells)){
            this.setState({status:`Game is stalemate`,next:null});
            return ;
        }

        //Game is Running currently
        next= next==='O'?'X':'O';  //get new value for next
        this.setState({next});
        this.setState({status:`Next Move: "${next}"`});
        const datas=[next,id];
        
        this.setState({datas});
        console.log(datas);

    }

    reset=()=>{
        //this.setState(this.getInitialState());
        this.game.reset();
        this.setState({...this.game, status:`Next Move : "O"`});
    }

    render(){
        console.log('this.state',this.state);
        
        return (
            <div>
                <StatusMessage message={this.state.status} moves={this.state.moves} />
                <TicTacToeBoard cells={this.state.cells} 
                                winner={this.state.winner}
                                winningCombo={this.state.winningCombo}
                                onCellClick={this.handleCellClick}
                />
                <button onClick={this.reset} >Reset</button>
                <Pos datas={this.state.datas} player={this.state.datas} position={this.state.datas}/>
            </div>
        );
    }
}

const _component=(props)=>{

    return (
        <div>
            <StatusMessage message="Next Move 'O'"/>
            <TicTacToeBoard/>
            <button>Reset</button>
        </div>
    );

}


export default component;