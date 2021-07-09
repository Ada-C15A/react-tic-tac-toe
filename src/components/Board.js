import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

const generateSquareComponents = (squares,  onClickCallback) => {

  const squaresArray = destructureMatrix(squares)
  const squaresList =  squaresArray.map( (square) => {
    return <Square 
            key={square.id}
            id={square.id}
            value={square.value}
            onClickCallback={onClickCallback}
            squares={squares}
            />
  })
  return squaresList
}


const destructureMatrix = (squares) => {
  let destructuredSquare = []

  destructuredSquare.push(...squares[0])
  destructuredSquare.push(...squares[1])
  destructuredSquare.push(...squares[2])

  return destructuredSquare
}

const Board = ({ onClickCallback, squares }) => {
  const squareComponents = generateSquareComponents(squares, onClickCallback);
  return  <div className="grid" >
            {squareComponents}
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
