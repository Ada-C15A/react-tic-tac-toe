import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = ({ id, value, onClickCallback, currentPlayer, squaresArray } ) => {

  return <button
    className="square"
    onClick={()=>{onClickCallback(id, currentPlayer, squaresArray)}}
    id={id}
  >
    {value}
  </button>
}

Square.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  currentPlayer: PropTypes.string.isRequired,
  squaresArray: PropTypes.array.isRequired,
};

export default Square;
