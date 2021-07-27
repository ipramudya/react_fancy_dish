import { useState, useContext } from 'react';
import { RestaurantContext } from '../../context/RestaurantContext';
import CONFIG from '../../global/config';
import ENDPOINTS from '../../global/endpoints';

const AddReview = ({ id }) => {
  const { addCusReviews } = useContext(RestaurantContext);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    const body = {
      id,
      name,
      review,
    };

    fetch(ENDPOINTS.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': CONFIG.CONTENT_TYPE,
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        alert(responseJson.message);
        addCusReviews(responseJson.customerReviews);
      })
      .catch((error) => alert(error.message));

    setName('');
    setReview('');
  };

  return (
    <div className='addReview'>
      <h3>Add Your Review</h3>
      <form id='addReviewForm' onSubmit={submitHandler}>
        <input
          type='text'
          name='name'
          placeholder='Your name'
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <textarea
          name='review'
          placeholder='Your review'
          required
          value={review}
          onChange={(e) => {
            setReview(e.target.value);
          }}
        ></textarea>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default AddReview;
