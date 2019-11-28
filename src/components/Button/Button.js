import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ upToClick }) => {
  return (
    <div className={s.Button_pos}>
      <button onClick={upToClick} type="button" className={s.Button}>
        Load More
      </button>
    </div>
  );
};

Button.propTypes = {
  upToClick: PropTypes.func.isRequired,
};

export default Button;
