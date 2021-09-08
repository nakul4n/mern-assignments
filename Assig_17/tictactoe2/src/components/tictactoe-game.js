import React from 'react'
import StatusMessage from './status-message';
import TicTacToeBoard from './tictactoe-board';
import Game from '../service/game';
import Pos from './position';
import GameStatics from './game-statics'

let played = 0;
let staticc = [];

let d = 0;
let xwin = 0;
let owin = 0;
class component extends React.Component {

    constructor(props) {
        super(props);
        this.game = new Game();
        this.state = { ...this.game, status: 'Next Move "O' };
        this.movecount = 1;
    }

    getInitialState = () => {
        return {
            cells: [null, null, null,
                null, null, null,
                null, null, null
            ],
            next: 'O',
            winner: null,
            status: 'Next Move "O"',
            datas: [],




        }
    }

    handleCellClick = (id) => {

        if (this.game.move(id)) {

            this.setState({ cells: [...this.game.cells] });

            if (this.game.winner) {
                this.setState({ status: `"${this.game.winner}" Wins` });
                this.setState({ winner: this.game.winner, winningCombo: this.game.winningCombo });
                this.setState({ moves: 9 });
                played++;

                if (this.game.winner === 'X')
                    xwin++;
                else
                    owin++;


                staticc = [played, xwin, owin, d];
                this.setState({ statics: staticc });
                return;
            }

            if (this.game.isStalemate()) {
                this.setState({ status: "Game is Stalemate" });
                played++;
                d++;
                staticc = [played, xwin, owin, d];
                this.setState({ statics: staticc })

                return;
            }

            this.setState({ next: this.game.next });
            this.setState({ moves: this.game.moves });
            let playerr = this.game.next;
            let count = this.game.movecount++;

            if (playerr === 'X')
                playerr = 'O';
            else
                playerr = 'X';
            let datas2 = [count, playerr, id];
            let datas = [...this.state.datas, ...datas2]

            this.setState({ datas });
            console.log(datas);

        }


    }

    /*
        khandleCellClick = (id) => {
            let next = this.state.next;
    
            //const cells= this.state.cells; //I am accessing current cells to modify
    
            const cells = [...this.state.cells]; //create a new array with old values
            cells[id] = next;  //change one cell in the new array
            this.setState({ cells });
    
            let winner = this.game.check(cells);
            if (winner) {
                this.setState({ winner, status: `"${cells[winner[0]]}" Wins`, next: null });
                return;
            }
    
            if (this.game.isStalemate(cells)) {
                this.setState({ status: `Game is stalemate`, next: null });
                return;
            }
    
            //Game is Running currently
            next = next === 'O' ? 'X' : 'O';  //get new value for next
            this.setState({ next });
            this.setState({ status: `Next Move: "${next}"` });
            let playerr = next;
            if (playerr === 'X')
                playerr = 'O';
            else
                playerr = 'X';
            const datas = [playerr, id];
    
            this.setState({ datas });
            console.log(datas);
    
        }
    */
    reset = () => {
        //this.setState(this.getInitialState());
        this.game.reset();
        this.setState({ ...this.game, status: `Next Move : "O"`, statics: [played, xwin, owin, d] });
    }

    render() {
        console.log('this.state', this.state);

        return (
            <div>
                <StatusMessage message={this.state.status} moves={this.state.moves} />
                <TicTacToeBoard cells={this.state.cells}
                    winner={this.state.winner}
                    winningCombo={this.state.winningCombo}
                    onCellClick={this.handleCellClick}
                />
                <button onClick={this.reset} >Reset</button>
                <div  style={{display:"flex",alignItems:"center"}}>
                <Pos datas={this.state.datas} />
                <GameStatics stati={this.state.statics} />
                </div>

            </div>
        );
    }
}

/*const _component = (props) => {

    return (
        <div>
            <StatusMessage message="Next Move 'O'" />
            <TicTacToeBoard />
            <button>Reset</button>
        </div>
    );

}
*/

export default component;