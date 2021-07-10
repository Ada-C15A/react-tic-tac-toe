import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';
let currentPlayer=PLAYER_1;

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
  
}

const App = () => {

  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  const [winner, setWinner] = useState(null);

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
   const onClickCallback=(returningId)=>{


   const newSquares = []

 

      for (let row =0; row<squares.length;row+=1){
        newSquares.push([])
        for(let col=0;col<squares.length; col+=1){
        
          if (squares[row][col].id === returningId){
            newSquares[row].push({
              id:returningId,
              value:currentPlayer
            })
       
          }else{
            newSquares[row].push(squares[row][col])
          }
         
        }

      }
   
      setSquares(newSquares);

      if (currentPlayer === PLAYER_1) {
        currentPlayer = PLAYER_2;
      } else if (currentPlayer === PLAYER_2) {
        currentPlayer =PLAYER_1;
      }
      checkForWinner(newSquares)
  }

  


  const checkForWinner = (board) => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.
    
   let winningMoveList=[
      [board[0][0],board[0][1],board[0][2]],
      [board[1][0],board[1][1],board[1][2]],
      [board[2][0],board[2][1],board[2][2]],
      [board[0][0],board[1][0],board[2][0]],
      [board[0][1],board[1][1],board[2][1]],
      [board[0][2],board[1][2],board[2][2]],
      [board[0][0],board[1][1],board[2][2]],
      [board[0][2],board[1][1],board[2][0]],

    ]



    for(let i=0; i<winningMoveList.length;i++){
    
      let isWinner=false
      if (winningMoveList[i][0].value === winningMoveList[i][1].value && winningMoveList[i][0].value ===winningMoveList[i][2].value  ){

        if (winningMoveList[i][0].value === PLAYER_1) {
          isWinner=true
          setWinner('x')

        }else if(winningMoveList[i][0].value === PLAYER_2){
          isWinner=true
          setWinner('o')
  
        }
      }
    }
  }

  const resetGame = () => {
    // Complete in Wave 4
    setSquares(generateSquares());
    setWinner(null);
  }
console.log('winner',winner)
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {winner}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback}/>
      </main>
    </div>
  );
}

export default App;
