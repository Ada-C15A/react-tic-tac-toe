import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

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

// squares: [
//   [
//     {id: 0, value: ''},
//     {id: 1, value: ''},
//     {id: 2, value: ''},
//   ],
//   [
//     {id: 3, value: ''},
//     {id: 4, value: ''},
//     {id: 5, value: ''},
//   ]
// ]

const App = () => {

  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  const [playerTurn, setPlayerTurn] = useState(PLAYER_1) // 'player_1 | player_2'

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const handleSquareClick = (updatedSquare) => {
    const updatedSquares = squares.map(row => row.map(square => {
      if (square.id === updatedSquare && square.value === '') {
        square.value = playerTurn
        return square;
      } else {
        return square;
      }
    }))

    updatePlayerTurn()
    setSquares(updatedSquares)
  }

  const updatePlayerTurn = () => {
    if (playerTurn === PLAYER_1) {
      setPlayerTurn(PLAYER_2)
    } else {
      setPlayerTurn(PLAYER_1)
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
        <Board squares={squares} onClickCallback={handleSquareClick} />
      </main>
    </div>
  );
}

export default App;
