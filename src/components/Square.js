import PropTypes from 'prop-types';
import React, { useState } from 'react';

import './Square.css'

const Square = ({id, value, onClickCallback}) => {


  const markSquare = () => {
    onClickCallback(id);
  }
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.

  return <button 
    onClick={markSquare}
    className="square"
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
