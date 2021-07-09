import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';
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
  console.log('ss',squares)
  return squares;
  
}

const App = () => {

  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
   const onClickCallback=(returningId)=>{
   console.log('id',returningId)

   const newSquares = []
   let currentId=0
 

      for (let row =0; row<squares.length;row+=1){
        newSquares.push([])
        for(let col=0;col<squares.length; col+=1){
          console.log('row col',squares[row][col].id)
          if (squares[row][col].id === returningId){
            newSquares[row].push({
              id:currentId,
              value:currentPlayer
            })
            currentId+=1
          }else{
            newSquares[row].push(squares[row][col])
          }
         
        }
      }
      console.log(' square',squares)
     console.log('nnew square',newSquares)
   
      setSquares(newSquares);

      if (currentPlayer === PLAYER_1) {
        currentPlayer = PLAYER_2;
      } else if (currentPlayer === PLAYER_2) {
        currentPlayer =PLAYER_1;
      }
  }

  


  const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.

  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback}/>
      </main>
    </div>
  );
}

export default App;
