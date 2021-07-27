import CONFIG from './config';

const ENDPOINTS = {
  ALL_RESTAURANTS: `${CONFIG.BASE_URL}/list`,
  SEARCH_RESTAURANT: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,
  ADD_REVIEW: `${CONFIG.BASE_URL}/review`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  PICTURE: (id) => `${CONFIG.BASE_URL}/images/medium/${id}`,
};

export default ENDPOINTS;
