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
  const [winner, setWinner] = useState('')

  const onClickCallback = (id) => {
    let row = 0;
    while (id > 2) {
      id -= 3
      row ++
    }
  }

  const checkForWinner = (row, column) => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    if (squares[row][0]['value'] === currentPlayer &&
      squares[row][1]['value'] === currentPlayer &&
      squares[row][2]['value'] === currentPlayer) {
      setWinner(currentPlayer)
      return true
    }
    // 2. Go down each column to see if
    //    3 squares in each column match
    if (squares[0][column]['value'] === currentPlayer &&
      squares[1][column]['value'] === currentPlayer &&
      squares[2][column]['value'] === currentPlayer) {
      setWinner(currentPlayer)
      return true
    }
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.
    if ((squares[0][0]['value'] === currentPlayer &&
      squares[1][1]['value'] === currentPlayer &&
      squares[2][2]['value'] === currentPlayer) || 
      (squares[0][2]['value'] === currentPlayer &&
      squares[1][1]['value'] === currentPlayer &&
      squares[2][0]['value'] === currentPlayer)
    ) {
      setWinner(currentPlayer)
      return true
    }
    return false
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
    setSquares(generateSquares());
    setCurrentPlayer(PLAYER_1);
    setWinner('');
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>React Tic Tac Toe</h1>
        <h2>{winner == null ? `` : `The winner is ${winner}`} </h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquares}/>
      </main>
    </div>
  );
}

export default App;
