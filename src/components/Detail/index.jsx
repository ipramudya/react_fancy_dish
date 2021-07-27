import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { RestaurantContext } from '../../context/RestaurantContext.js';
import ENDPOINTS from '../../global/endpoints';
import Loaders from '../Loaders';
import Menu from './menu';
import Reviews from './reviews';
import './style.css';

const Detail = () => {
  const [isPending, setIsPending] = useState(false);
  const { addRestaurant, restaurant, addCusReviews } =
    useContext(RestaurantContext);
  const { id } = useParams();

  useEffect(() => {
    setIsPending(true);
    fetch(ENDPOINTS.DETAIL(id))
      .then((response) => {
        if (!response.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return response.json();
      })
      .then((data) => {
        addCusReviews(data.restaurant.customerReviews);
        addRestaurant(data.restaurant);
        setIsPending(false);
      })
      .catch((error) => alert(error.message));
  }, []);

  return (
    <>
      {isPending && <Loaders />}
      {restaurant && (
        <div className='restaurant'>
          <div className='restaurant_image'>
            <img
              src={ENDPOINTS.PICTURE(restaurant.pictureId)}
              alt='restaurant_image'
              className='images'
            />
          </div>
          <Menu />
          <Reviews />
        </div>
      )}
    </>
  );
};

export default Detail;
