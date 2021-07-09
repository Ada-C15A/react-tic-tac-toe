import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';

const PLAYER_1 = 'X'
const PLAYER_2 = 'O'

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
  const [currentPlayer, setCurrentPlayer] = useState('X');

  // Wave 2

  const updateSquare = (squareToUpdate) => {
    
    const row = Math.floor(squareToUpdate.id/3);
    const column = squareToUpdate.id%3;
    const newBoard = [...squares]

    squareToUpdate.value = currentPlayer
    newBoard[row][column] = squareToUpdate
    if (currentPlayer.value !== '') {
      if (currentPlayer === 'X') {
        setCurrentPlayer(PLAYER_2);
    } else {
      setCurrentPlayer(PLAYER_1)
    };
    }
    setSquares(newBoard)
  }
  
  const checkForWinner = () => {
    // Complete in Wave 3
    let i = 0;

    // Check all the rows and columns for a winner
    while (i < 3) {
      if (squares[i][0].value === squares[i][1].value &&
        squares[i][2].value === squares[i][1].value &&
        squares[i][0].value !== '') {
        return squares[i][0].value;
      } else if (squares[0][i].value === squares[1][i].value &&
        squares[2][i].value === squares[1][i].value &&
        squares[0][i].value !== '') {
        return squares[0][i].value;
      }
      i += 1;
    }
    if (squares[0][0].value === squares[1][1].value &&
      squares[2][2].value === squares[1][1].value &&
      squares[1][1].value !== '') {
      return squares[0][0].value;
    }

    if (squares[0][2].value === squares[1][1].value &&
      squares[2][0].value === squares[1][1].value &&
      squares[1][1].value !== '') {
      return squares[0][2].value;
    }

    return null;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {checkForWinner()} </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board 
        squares={ squares }
        onClickCallback={ updateSquare } 
        currentPlayer={ currentPlayer }
        />
      </main>
    </div>
  );
}

export default App;