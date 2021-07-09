import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares) => {
  const makeSquares = []
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      makeSquares.push(squares[i][j])
    }
  } return makeSquares
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components

}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares);
  
  return <div className="grid" >
    {squareList.map(squ => {
      return (
        <Square
        id={squ.id}
        key={squ.key}
        value={squ.value}
        onClickCallback={onClickCallback}
        />
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
