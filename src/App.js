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
  const [player, setPlayer] = useState(PLAYER_1);
  const [winner, setWinner] = useState(null);

  const checkForWinner = () => {
    let i = 0;

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

  const onClickCallback = (event) => {
    if (winner !== null)
      return;
    
    let updatedGrid = [];
    for(let i = 0; i < squares.length; i++) {
      for(let j = 0; j < squares.length; j++) {
        let currentSquare = squares[i][j];
        if (currentSquare.id === event) {
          if (currentSquare.value !== '')
            return;
          currentSquare.value = player;
          if (player === PLAYER_1) {
            setPlayer(PLAYER_2)
          } else {
            setPlayer(PLAYER_1);
          }
        }
      }
      updatedGrid.push(squares[i]);
    }
    setSquares(updatedGrid);
    setWinner(checkForWinner);
  }

  const resetGame = () => {
    setSquares(generateSquares());
    setWinner(null);
    setPlayer(PLAYER_1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner === null ? `` : `Winner is ${ winner } !!! `}</h2>
        <button className='resetButton' onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback}/>
      </main>
    </div>
  );
}

export default App;
