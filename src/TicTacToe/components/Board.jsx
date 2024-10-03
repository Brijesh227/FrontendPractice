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

    const userClicked = (index) => {
        if(!board[index] && !winner){
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

  return (
    <div>
        <h2>Tic Tac Toe game</h2>
        <div className='instruction-row'>Next player: { currTurn } </div>
        <div>
            <div className='board-row'>
                <Square index={0} userClicked={userClicked} content={board[0]}/>
                <Square index={1} userClicked={userClicked} content={board[1]}/>
                <Square index={2} userClicked={userClicked} content={board[2]}/>
            </div>
            <div className='board-row'>
                <Square index={3} userClicked={userClicked} content={board[3]}/>
                <Square index={4} userClicked={userClicked} content={board[4]}/>
                <Square index={5} userClicked={userClicked} content={board[5]}/>
            </div>
            <div className='board-row'>
                <Square index={6} userClicked={userClicked} content={board[6]}/>
                <Square index={7} userClicked={userClicked} content={board[7]}/>
                <Square index={8} userClicked={userClicked} content={board[8]}/>
            </div>
        </div>
        <div className='instruction-row'>Winner is: { winner ? winner : '--'}</div>
    </div>
  )
}

export default Board;