import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';

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
  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);


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

  const updateSquares = (id) => {
    const newSquares = [...squares];
    let row = 0;
    let column = 0;
    let found = false;

    while (row < 3 && !found) {
      while (column < 3 && !found) {
        let currentSquare = newSquares[row][column];
        if (currentSquare.id === id) {
          if (currentSquare.value !== '') return;
          found = true;
          currentSquare.value = currentPlayer;
          if (currentPlayer === PLAYER_1) {
            setCurrentPlayer(PLAYER_2)
          } else {
            setCurrentPlayer(PLAYER_1)
          }
        }
        column += 1;
      }
      row += 1;
      column = 0;
    }
    setSquares(newSquares);
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
        <Board squares={squares} onClickCallback={updateSquares}/>
      </main>
    </div>
  );
}

export default App;
