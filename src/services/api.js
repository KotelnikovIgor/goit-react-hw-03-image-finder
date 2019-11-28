import axios from 'axios';

export const getImages = (
  query = '',
  pageNumber = 1,
  key = '14428730-a14e9bfed32119aa413126b46',
) => {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=${key}&image_type=photo&orientation=horizontal&per_page=15`,
  );
};

export const somethingFunc = () => {};
