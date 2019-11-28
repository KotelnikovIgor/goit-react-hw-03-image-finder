import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, openModal }) => {
  return (
    <li key={image.id} className={s.ImageGalleryItem}>
      <img
        onClick={() => openModal(image.largeImageURL)}
        src={image.webformatURL}
        alt=""
        className={s.ImageGalleryItem_image}
        role="presentation"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
