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
  const [playerTurn, setPlayerTurn] = useState(PLAYER_1);
  const [winner, setWinner] = useState(null);

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const handleSquareClick = (updatedSquare) => {
    const updatedSquares = squares.map(row => row.map(square => {
      if (square.id === updatedSquare && square.value === '') {
        square.value = playerTurn
        // check winner passing row?
        setWinner(checkForWinner())
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

    // check rows and colums
    let i =0;
    while (i < 3) {
      if (squares[i][0].value !== '' 
      && squares[i][0].value === squares[i][1].value 
      && squares[i][0].value === squares[i][2].value) {
        return squares[i][0].value;
      } else if (squares[0][i].value !== ''
      && squares[0][i].value === squares[1][i].value
      && squares[0][i].value === squares[2][i].value) {
        return squares[0][i].value;
      }
      i += 1;
    } 
    // check diagonals
    if (squares[0][0].value !== ''
    && squares[0][0].value === squares[1][1].value
    && squares[0][0].value === squares[2][2].value) {
      return squares[0][0].value;
    } else if (squares[0][2].value !== ''
    && squares[0][2].value === squares[1][1].value
    && squares[0][2].value === squares[2][0]) {
      return squares[0][2].value;
    }

    return null;
  }
  // this worked! i was calling it from checkForWinner(row, id) but gave up trying to find fancier ways to check for other kinds of wins
  // const checkCurrentRow = (row, id) => {
  //   let i = 0;
  //   while (i < 3) {
  //     if (row[i].value === playerTurn) {
  //       i += 1;
  //     } else {
  //       return false;
  //     }

  //   }
  //   setWinner(playerTurn);
  //   return true;
  // }



  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner === null ? `Current Player ${ playerTurn }` : `Winner is ${ winner }`}</h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={handleSquareClick} />
      </main>
    </div>
  );
}

export default App;
