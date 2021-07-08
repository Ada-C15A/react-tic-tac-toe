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

const destructureMatrix = (squares) => {
  let destructuredSquare = []

  destructuredSquare.push(...squares[0])
  destructuredSquare.push(...squares[1])
  destructuredSquare.push(...squares[2])

  return destructuredSquare
}

const reshapeMatrix = (array) => {
  let matrix = []

  matrix.push([array[0], array[1], array[2]])
  matrix.push([array[3], array[4], array[5]])
  matrix.push([array[6], array[7], array[8]])
  return matrix
}

const updateCurrentPlayer = (currentPlayer, setCurrentPlayer) => {
  const updatePlayer = currentPlayer === PLAYER_1 ? PLAYER_2:PLAYER_1
  setCurrentPlayer(updatePlayer)
}

const App = () => {
  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1)
  const [squaresArray, setSquaresArray ] = useState(destructureMatrix(squares))
  const [winner, setWinner ] = useState(null)

  const checkForWinner = (squaresArray) => {
    console.log('checkForWinner')
    let x = 0
    let o = 0
    let empty = false
    const possibilities = [
      [squaresArray[0].value, squaresArray[1].value, squaresArray[2].value],
      [squaresArray[3].value, squaresArray[4].value, squaresArray[5].value],
      [squaresArray[6].value, squaresArray[7].value, squaresArray[7].value],
      [squaresArray[0].value, squaresArray[3].value, squaresArray[6].value],
      [squaresArray[1].value, squaresArray[4].value, squaresArray[2].value],
      [squaresArray[2].value, squaresArray[5].value, squaresArray[8].value],
      [squaresArray[0].value, squaresArray[4].value, squaresArray[8].value],
      [squaresArray[2].value, squaresArray[4].value, squaresArray[6].value]
    ]

    for(let i = 0; i < possibilities.length; i++){
      if(possibilities[i][0] === '' || possibilities[i][1] === '' || possibilities[i][2] === ''){
        empty = true
      }
      if(possibilities[i][0] === possibilities[i][1] && possibilities[i][1] === possibilities[i][2]){
        if(possibilities[i][0] === 'X'){
          x += 1
        }
        if( possibilities[i][0] === 'O'){
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
      setWinner('X')
    }
    if(x < o){
      setWinner('O')
    }
    console.log({winner})
  }
  const onClickCallback = ((squareID, currentPlayer, squaresArray) => {
    updateCurrentPlayer(currentPlayer, setCurrentPlayer)
    squaresArray[squareID].value = currentPlayer
    setSquaresArray(squaresArray)
    const tempMatrix = reshapeMatrix(squaresArray)
    setSquares(tempMatrix)
    const tempSquaresArray = destructureMatrix(squares)
    setSquaresArray(tempSquaresArray)
    checkForWinner(squaresArray)
  })

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        {winner === 'Tie' ? <h2 className='tieGame'>The game is tied!</h2> : ''}
        {winner === null ?  <h2>The current player is {currentPlayer}</h2> : ''}
        {winner === 'O' || winner === 'X'? <h2>The winner is: <span className="winner"> Player{winner}</span>!!!!</h2> : ''}
        <button>Reset Game</button>
      </header>
      <main>
        <Board
          onClickCallback={onClickCallback}
          currentPlayer={currentPlayer}
          squaresArray={squaresArray}
        />
      </main>
    </div>
  );
}

export default App;
