import { Link } from 'react-router-dom';
import CONFIG from '../../global/config';

const RestaurantList = ({ restaurant }) => {
  return (
    <div className='card_container'>
      <div className='card_image'>
        <img
          src={`${CONFIG.BASE_URL}/images/medium/${restaurant.pictureId}`}
          alt='restaurant_image'
          className='images'
        />
      </div>
      <div className='card_item'>
        <Link to={`/detail/${restaurant.id}`} className='card_title'>
          {restaurant.name}
        </Link>
        <div className='card_detail'>
          <div className='card_city'>
            <span className='icon' aria-label='location icon'>
              <i className='fas fa-map-marker-alt'></i>
            </span>
            <p className='card_city_text'>{restaurant.city}</p>
          </div>
          <div className='card_rating'>
            <span className='icon' aria-label='star icon'>
              <i className='fas fa-star'></i>
            </span>
            <p className='card_rating_text'>{restaurant.rating}</p>
          </div>
        </div>
        <p className='card_desc'>{restaurant.description}</p>
      </div>
    </div>
  );
};

export default RestaurantList;
