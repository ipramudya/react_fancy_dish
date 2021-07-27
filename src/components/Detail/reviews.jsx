import { useContext } from 'react';
import { RestaurantContext } from '../../context/RestaurantContext';

const Reviews = () => {
  const { cusReviews } = useContext(RestaurantContext);

  return (
    <div className='detail_review'>
      <h3 className='reviews_title'>All Reviews</h3>
      {cusReviews &&
        cusReviews
          .slice(0)
          .reverse()
          .map((item) => (
            <div className='reviews_item' key={item.name}>
              <div className='reviews_content'>
                <h3 className='reviews_name'>{item.name}</h3>
                <h3 className='reviews_date'>on {item.date}</h3>
              </div>
              <p className='reviews_text'>{item.review}</p>
            </div>
          ))}
    </div>
  );
};

export default Reviews;
