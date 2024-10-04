import React from 'react';
import Square from './Square';
import './Board.css';
import { useState } from 'react';
import { useEffect } from 'react';

function Board() {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [winner, setWinner] = useState(undefined);
    const [currTurn, setCurrTurn] = useState("x");
    const [selectedIndex, setSelectedIndex] = useState(undefined);

    const handleClick = (index) => {
        if(!board[index] && !winner) {
            const newArr = [...board];
            newArr[index] = currTurn;
            setBoard(newArr);
            setSelectedIndex(index);
            setCurrTurn(currTurn === 'x' ? 'o' : 'x');
        }
    }

    useEffect(() => {
        const winnerPosition = [
            [0,1,2],
            [0,4,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [2,4,6],
            [3,4,5],
            [6,7,8]
        ];
        const checkForPosition = winnerPosition.filter(arr => arr.some(ele => ele === selectedIndex));
        const isWinner = checkForPosition.filter(arr => arr.every(item => board[item] === board[selectedIndex]));
        if(isWinner.length > 0){
            setWinner(board[selectedIndex]);
        }
    },[selectedIndex])

    const resetGame = () => {
        setBoard(Array(9).fill(""));
        setWinner(undefined);
        setCurrTurn("x");
    }
 
  return (
    <div>
        <h2>Tic Tac Toe game</h2>
        <div className='instruction-row'>Next player: { currTurn } </div>
        <div>
            <div className='board-row'>
                <Square userClicked={() => handleClick(0)} content={board[0]}/>
                <Square userClicked={() => handleClick(1)} content={board[1]}/>
                <Square userClicked={() => handleClick(2)} content={board[2]}/>
            </div>
            <div className='board-row'>
                <Square userClicked={() => handleClick(3)} content={board[3]}/>
                <Square userClicked={() => handleClick(4)} content={board[4]}/>
                <Square userClicked={() => handleClick(5)} content={board[5]}/>
            </div>
            <div className='board-row'>
                <Square userClicked={() => handleClick(6)} content={board[6]}/>
                <Square userClicked={() => handleClick(7)} content={board[7]}/>
                <Square userClicked={() => handleClick(8)} content={board[8]}/>
            </div>
        </div>
        <div className='instruction-row'>Winner is: { winner ? winner : '--'}</div>
        { (winner || board.every(ele => ele)) && <button className="board-button" onClick={resetGame}>RESET</button>}
    </div>
  )
}

export default Board;