import CONFIG from './config';

const ENDPOINTS = {
  ALL_RESTAURANTS: `/list`,
  ADD_REVIEW: `/review`,
  DETAIL: (id) => `/detail/${id}`,
  PICTURE: (id) => `${CONFIG.BASE_URL}/images/medium/${id}`,
};

export default ENDPOINTS;
