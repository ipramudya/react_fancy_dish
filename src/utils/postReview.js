import CONFIG from '../global/config';
import axios from 'axios';

export const postReview = ({ url, body }) => {
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
      alert(response.data.message);
    })
    .catch((err) => {
      alert(err);
    });
};
