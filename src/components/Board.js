import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  const flatSquares = []
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      flatSquares.push(squares[i][j])
    }
  }
  // console.log(flatSquares)
  return flatSquares
  // return flatSquares.map((value, id) => {
  //   <Square
  //     value={value}
  //     onClickCallback={onClickCallback}
  //     id={id}
  //   />
  // })
}


// Complete this for Wave 1
// squares is a 2D Array, but 
//  you need to return a 1D array
//  of square components



const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  // console.log(squareList);
  return <div className="grid">
    {squareList && squareList.map(s => {
      return (
        <Square id={s.id} key={s.id} value={s.value} onClickCallback={onClickCallback} />
      )
    })}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
