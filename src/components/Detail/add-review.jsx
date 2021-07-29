import { useState, useContext } from 'react';
import { RestaurantContext } from '../../context/RestaurantContext';
import ENDPOINTS from '../../global/endpoints';
import { postReview } from '../../utils/postReview';

const AddReview = ({ id }) => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const { addCusReviews } = useContext(RestaurantContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const body = {
      id,
      name,
      review,
    };

    postReview({
      url: ENDPOINTS.ADD_REVIEW,
      body,
      addCusReviews,
    });

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
