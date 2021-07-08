import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareList = (squares) => {
  const flatSquares = []
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      flatSquares.push(squares[i][j])
    }
  }
  return flatSquares
}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareList(squares);

  return <div className="grid">
    {squareList && squareList.length > 0 && squareList.map(s => {
      return (
        <Square
          id={s.id}
          key={s.id}
          value={s.value}
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
