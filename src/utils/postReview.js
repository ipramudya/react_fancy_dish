import CONFIG from '../global/config';
import axios from 'axios';

export const postReview = ({ url, body, addCusReviews }) => {
  axios({
    method: 'post',
    url,
    headers: {
      'Content-Type': CONFIG.CONTENT_TYPE,
      'X-Auth-Token': CONFIG.KEY,
    },
    data: JSON.stringify(body),
  })
    .then((response) => {
      addCusReviews(response.data.customerReviews);
      alert(response.data.message);
    })
    .catch((err) => {
      alert(err);
    });
};
