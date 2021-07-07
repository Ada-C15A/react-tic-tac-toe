import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = ({ id, value, onClickCallback }) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.

  const takeSquare = () => {
    onClickCallback(id)
  }

  return <button
    className="square"
    onClick={takeSquare}
  >
    {value}
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
