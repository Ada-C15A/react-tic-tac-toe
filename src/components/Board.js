import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

const generateSquareComponents = (squaresArray,  onClickCallback, currentPlayer) => {
  const squaresList =  squaresArray.map( (square) => {
    return <Square 
            key={square.id}
            id={square.id}
            value={square.value}
            onClickCallback={onClickCallback}
            currentPlayer={currentPlayer}
            squaresArray={squaresArray}
            />
  })
  return squaresList
}


const Board = ({ onClickCallback, currentPlayer, squaresArray }) => {
  const squareComponents = generateSquareComponents(squaresArray, onClickCallback, currentPlayer);
  return  <div className="grid" >
            {squareComponents}
          </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        // id: PropTypes.number.isRequired,
        // value: PropTypes.string.isRequired,
        // squares: PropTypes.array.isRequired,
        currentPlayer: PropTypes.string.isRequired,
        squaresArray: PropTypes.array.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
