import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = ({ id, value, onClickCallback } ) => {
  return <button
    className="square"
    onClick={()=>{onClickCallback(id)}}
    id={id}
  >
    {value}
  </button>
}

Square.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
};

export default Square;
