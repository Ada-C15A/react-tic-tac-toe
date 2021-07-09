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

const updateCurrentPlayer = (currentPlayer, setCurrentPlayer) => {
  const updatePlayer = currentPlayer === PLAYER_1 ? PLAYER_2:PLAYER_1
  setCurrentPlayer(updatePlayer)
}

const App = () => {
  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1)
  const [winner, setWinner ] = useState(null)

  const checkForWinner = (squares) => {
    let x = 0
    let o = 0
    let empty = false
    const possibilities = [
      [squares[0][0].value, squares[0][1].value, squares[0][2].value],
      [squares[1][0].value, squares[1][1].value, squares[1][2].value],
      [squares[2][0].value, squares[2][1].value, squares[2][2].value],
      [squares[0][0].value, squares[1][0].value, squares[2][0].value],
      [squares[0][1].value, squares[1][1].value, squares[2][1].value],
      [squares[0][2].value, squares[1][2].value, squares[2][2].value],
      [squares[0][0].value, squares[1][1].value, squares[2][2].value],
      [squares[0][2].value, squares[1][1].value, squares[2][0].value]
    ]

    for(let i = 0; i < possibilities.length; i++){
      if(possibilities[i][0] === '' || possibilities[i][1] === '' || possibilities[i][2] === ''){
        empty = true
      }
      if(possibilities[i][0] === possibilities[i][1] && possibilities[i][1] === possibilities[i][2]){
        if(possibilities[i][0] === 'x'){
          x += 1
        }
        if( possibilities[i][0] === 'o'){
          o += 1
        }
      }
    }

    if(x === 0 && o === 0 && empty){
      setWinner(null)
    }
    if(x === 0 && o === 0 && !empty)
      setWinner('Tie')
    if( x > o){
      setWinner('x')
    }
    if(x < o){
      setWinner('o')
    }
  }

  const updateSquaresByID = (squareID) => {
    for(let i = 0; i < squares.length; i++){
      for(let j = 0; j < squares[i].length; j++){
        if(squares[i][j].id === squareID && squares[i][j].value === ''){
          squares[i][j].value = currentPlayer
          updateCurrentPlayer(currentPlayer, setCurrentPlayer)
          setSquares(squares)
        }
      }
    }
  }

  const onClickCallback = ((squareID) => {
    if(winner === null){
      updateSquaresByID(squareID)
      checkForWinner(squares)
    }
  })

  const resetGame = () => {
    setSquares((generateSquares()))
    setCurrentPlayer(PLAYER_1)
    setWinner(null)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        {winner === 'Tie' ? <h2 className='tieGame'>The game is tied!</h2> : ''}
        {winner === null ?  <h2>The current player is {currentPlayer}</h2> : ''}
        {winner === 'o' || winner === 'x'? <h2>Winner is {winner.toLowerCase()}</h2> : ''}
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board
          onClickCallback={onClickCallback}
          squares={squares}
        />
      </main>
    </div>
  );
}

export default App;
