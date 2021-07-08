import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

// const PLAYER_1 = 'X';
// const PLAYER_2 = 'O';
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

  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [winner, setWinner] = useState('');
  const [turns, setTurns] = useState(0)

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const onClickCallback = (id) => {
    let row = 0
    while (id > 2) {
      id -= 3
      row++
    }

    if (!squares[row][id]['value'] && !winner) {
      const newSquares = [...squares]
      newSquares[row][id]['value'] = currentPlayer
      setSquares(newSquares)

      const updatedPlayer = currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1
      setCurrentPlayer(updatedPlayer)
      const gameOver = checkForWinner(row, id)
      if (!gameOver) {
        if (turns === 8) {
          setWinner('Tie')
        } else {
          setTurns(turns + 1)
        }
      }
    }
  }

  const checkForWinner = (row, col) => {
    // Complete in Wave 3
    // console.log('check winner called')
    // check row
    if (squares[row][0]['value'] === currentPlayer &&
      squares[row][1]['value'] === currentPlayer &&
      squares[row][2]['value'] === currentPlayer) {
      setWinner(currentPlayer)
      return true
    }

    // check col
    if (squares[0][col]['value'] === currentPlayer &&
      squares[1][col]['value'] === currentPlayer &&
      squares[2][col]['value'] === currentPlayer) {
      setWinner(currentPlayer)
      return true
    }

    // check diag
    if ((squares[0][0]['value'] === currentPlayer &&
      squares[1][1]['value'] === currentPlayer &&
      squares[2][2]['value'] === currentPlayer)
      || (squares[0][2]['value'] === currentPlayer &&
        squares[1][1]['value'] === currentPlayer &&
        squares[2][0]['value'] === currentPlayer)
    ) {
      setWinner(currentPlayer)
      return true
    }
    return false
  }


  const resetGame = () => {
    setSquares(generateSquares())
    setCurrentPlayer(PLAYER_1)
    setWinner('')
    setTurns(0)
  }

  const gameResults = winner === 'Tie' ? 'Tie Game' : winner.toLocaleLowerCase() === 'x' ? 'The Winner is x' : 'The Winner is o'

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>React Tic Tac Toe</h1>
        {!winner && <h2>Current Player: {currentPlayer}</h2>}
        {/* <h2>Winner is {winner === '' ? '' : winner === 'X' ? 'x' : 'o'} </h2> */}
        {winner && <h2>{gameResults}</h2>}
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} />
      </main>
    </div>
  );
}



export default App;
