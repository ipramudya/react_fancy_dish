import { useContext } from 'react';
import { RestaurantContext } from '../../context/RestaurantContext';
import Loaders from '../Loaders';

const MenuDesc = () => {
  const {
    restaurant: { restaurant },
  } = useContext(RestaurantContext);

  return restaurant.length !== 0 ? (
    <div className='menu_desc'>
      <div className='menu_title'>
        <h3 className='title_name'>{restaurant.name}</h3>
        <ul className='title_tag'>
          {restaurant.categories.map((item) => (
            <li key={item.uuid}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className='menu_address_rating'>
        <div className='menu_address'>
          <span className='icon'>
            <i className='fas fa-map-marker-alt'></i>
          </span>
          <span className='text'>
            {restaurant.address}, {restaurant.city}
          </span>
        </div>
        <div className='menu_rating'>
          <span className='icon'>
            <i className='fas fa-star'></i>
          </span>
          <span className='text'>{restaurant.rating}</span>
        </div>
      </div>
      <p className='menu_text'>{restaurant.description}</p>
    </div>
  ) : (
    <Loaders />
  );
};

export default MenuDesc;
