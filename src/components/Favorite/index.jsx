import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteRestaurant from '../../utils/FavoriteRestaurant-idb';
import RestaurantList from '../Homepage/RestaurantList';
import EmptyCard from './EmptyCard';

const Favorite = () => {
  const [query, setQuery] = useState('');
  const [idbRestaurants, setIdbRestaurants] = useState([]);

  useEffect(() => {
    return FavoriteRestaurant.getAllRestaurants().then((res) => {
      setIdbRestaurants(res);
    });
  }, []);

  return (
    <div className='Homepage'>
      <div className='menu_bar'>
        <div className='menu_tagline'>
          <h2>Favorites</h2>
          <p>Your favorites restaurants are listed below</p>
        </div>
        <div className='search'>
          <input
            type='search'
            name='search'
            placeholder='Search...'
            onChange={(event) => setQuery(event.target.value.toLowerCase())}
          />
          <span className='search_icon'>
            <i className='fas fa-search'></i>
          </span>
        </div>
      </div>
      <div className='restaurants'>
        {idbRestaurants && idbRestaurants.length > 0 ? (
          idbRestaurants
            .filter((item) => {
              if (query === '') {
                return item;
              } else if (item.name.toLowerCase().includes(query)) {
                return item;
              }
            })
            .map((restaurant) => (
              <RestaurantList restaurant={restaurant} key={restaurant.id} />
            ))
        ) : (
          <EmptyCard />
        )}
      </div>
    </div>
  );
};

export default Favorite;
