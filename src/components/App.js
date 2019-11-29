/* eslint-disable no-console */
import React, { Component } from 'react';
import styles from './App.module.css';
import SearchBar from './SearchBar/SearchBar';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';
import * as API from '../services/api';

// console.log(API);

export default class App extends Component {
  state = {
    img: '',
    pageNumber: 1,
    query: '',
    isLoading: false,
    isOpenModal: false,
    images: [],
  };

  componentDidMount() {
    const { query, pageNumber } = this.state;
    this.fetchImages(query, pageNumber);
  }

  componentDidUpdate(prevProps, prevState) {
    const { pageNumber, query, images } = this.state;
    if (prevState.pageNumber !== pageNumber || prevState.query !== query) {
      this.fetchImages(query, pageNumber);
    }

    if (prevState.images !== images && images > 15) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handelPress = e => {
    if (e.keyCode === 27) {
      this.setState({ isOpenModal: false });
    }
  };

  fetchImages = (query, pageNumber) => {
    this.setState({ isLoading: true });

    API.getImages(query, pageNumber)
      .then(res =>
        this.setState(prevState => ({
          images: [...prevState.images, ...res.data.hits],
        })),
      )
      .catch(err => console.log(err))
      .finally(() => this.setState({ isLoading: false }));
  };

  changePage = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  onSearch = queryParametr => {
    this.setState({ query: queryParametr, images: [], pageNumber: 1 });
  };

  openModal = imgUrl => {
    this.setState({ isOpenModal: true, img: imgUrl });
    window.addEventListener('keydown', this.handelPress);
  };

  closeModal = e => {
    window.removeEventListener('keydown', this.handelPress);
    if (e.target === e.currentTarget) {
      this.setState({ isOpenModal: false });
    }
  };

  render() {
    const { isLoading, isOpenModal, images, img } = this.state;

    return (
      <div className={styles.app}>
        <SearchBar onSearch={this.onSearch} />
        <ImageGallery images={images} openModal={this.openModal} />
        {images.length > 0 && <Button upToClick={this.changePage} />}
        {isLoading && <Loader />}
        {isOpenModal && (
          <Modal closeModal={this.closeModal} image={images} img={img} />
        )}
      </div>
    );
  }
}
