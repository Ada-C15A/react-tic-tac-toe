import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // 1D arr
  let flatSquares = []; 

  for (const row of squares) { 
    for (const square of row) {
        flatSquares.push(square)
    }
  } 

  return flatSquares.map( (square) => {
    return (
      <Square 
          value={ square.value }
          id={ square.id } 
          onClickCallback={ onClickCallback }
        />
    )
  })


}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  return <div className="grid" >
    {squareList}
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
