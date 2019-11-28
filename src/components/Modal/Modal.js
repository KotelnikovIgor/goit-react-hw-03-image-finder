import React from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const Modal = ({ image, closeModal, img }) => {
  return (
    <div className={s.Overlay} onClick={closeModal} role="presentation">
      <div className={s.Modal}>
        {image.map(el => (
          <img key={el.id} src={img} alt="" />
        ))}
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  closeModal: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
};

export default Modal;
