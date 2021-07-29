import { useParams } from 'react-router';

import ENDPOINTS from '../../global/endpoints';
import Loaders from '../Loaders';
import Menu from './menu';
import Reviews from './reviews';
import './style.css';
import useAxios from '../../hooks/useAxios.js';

const Detail = () => {
  const { id } = useParams();

  const {
    restaurant: { restaurant },
    loading,
    error,
  } = useAxios({
    url: ENDPOINTS.DETAIL(id),
    method: 'get',
  });

  return (
    <>
      {loading && <Loaders />}
      {error && <div>{error}</div>}
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
